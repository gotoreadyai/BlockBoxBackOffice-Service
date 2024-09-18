/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, Suspense } from "react";
import { useBlockStore } from "../../stores/blockStore";
import { JSONSchema7 } from "json-schema";
import { FiArrowDown, FiArrowUp, FiTrash2 } from "react-icons/fi";
import {
  ArrayFieldItemTemplate,
  ArrayFieldTemplate,
  BaseInputTemplate,
  CustomSelectWidget,
  DescriptionFieldTemplate,
  FieldTemplate,
  TitleFieldTemplate,
} from "./FormUI";
import { CloseRight } from ".";
import { BlockDefinition } from "../../types/types";

// Lazy load react-jsonschema-form and validator-ajv8
const LazyForm = React.lazy(() => import("@rjsf/core"));
const lazyValidator = () => import("@rjsf/validator-ajv8");

const blockSchemas = import.meta.glob<BlockDefinition>(
  "../../blocks/*Schema.ts",
  { eager: true }
);

const BlockDetailsPanel: React.FC = () => {
  const {
    selectedBlock,
    selectedSlot,
    setBlockData,
    removeBlock,
    moveBlock,
    deselectBlock,
  } = useBlockStore();

  const [schema, setSchema] = useState<JSONSchema7 | null>(null);
  const [validator, setValidator] = useState<any>(null); // Hold the lazy-loaded validator

  useEffect(() => {
    if (selectedBlock) {
      const blockSchemaKey = `../../blocks/${selectedBlock.filename}Schema.ts`;
      const blockSchema = blockSchemas[blockSchemaKey]?.default;
      if (blockSchema) {
        setSchema(blockSchema.jsonSchema as JSONSchema7 | null);
      } else {
        setSchema(null);
      }
    }

    // Load the validator only when the component is used
    lazyValidator().then((module) => {
      setValidator(() => module.default);
    });
  }, [selectedBlock]);

  const handleChange = (e: any) => {
    if (!selectedBlock) return;
    setBlockData(selectedBlock.id, e.formData);
  };

  const widgets = {
    SelectWidget: CustomSelectWidget,
  };

  if (!selectedBlock) return <div className="p-4">No block selected</div>;
  if (!schema) return <div className="p-4">Loading block schema...</div>;

  return (
    <>
      <CloseRight
        label={selectedBlock.filename}
        callback={() => {
          deselectBlock();
        }}
      />

      {/* Suspense will handle loading form and validator asynchronously */}
      <Suspense fallback={<div>Loading form...</div>}>
        {validator && (
          <LazyForm
            schema={schema}
            validator={validator}
            formData={selectedBlock.data}
            onChange={handleChange}
            uiSchema={{
              "ui:submitButtonOptions": { norender: true },
              
            }}
            templates={{
              BaseInputTemplate,
              TitleFieldTemplate,
              ArrayFieldTemplate,
              ArrayFieldItemTemplate,
              DescriptionFieldTemplate,
              FieldTemplate,
            }}
            widgets={widgets}
          />
        )}
      </Suspense>

      <div className="flex gap-2 p-md border-b border-base-300">
        <button
          aria-label="Move Up"
          className="btn btn-outline btn-sm"
          onClick={() =>
            selectedSlot && moveBlock(selectedBlock.id, selectedSlot, "up")
          }
        >
          <FiArrowUp /> Move Up
        </button>

        <button
         aria-label="Move Down"
          className="btn btn-outline btn-sm"
          onClick={() =>
            selectedSlot && moveBlock(selectedBlock.id, selectedSlot, "down")
          }
        >
          <FiArrowDown /> Move Down
        </button>

        <button
         aria-label="Delete Block"
          className="btn btn-outline btn-sm text-red-600"
          onClick={() =>
            selectedSlot && removeBlock(selectedBlock.id, selectedSlot)
          }
        >
          <FiTrash2 /> Delete Block
        </button>
      </div>
    </>
  );
};

export default BlockDetailsPanel;

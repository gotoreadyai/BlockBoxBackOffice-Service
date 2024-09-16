/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import JSONBlock from "./JSONBlock";
import { usePageStore } from "../../stores/pageStore";
import { useBlockStore } from "../../stores/blockStore";
import { useGlobalStore } from "../../stores/globalStore";
import { FiSave } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useCrudMutations } from "../../hooks/useCrudMutations";
import { PathParams } from "../../types/types";

const ScopePanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "initialScope" | "actualScope" | "slotsPreview" | "globalScope"
  >("initialScope");

  const [editedValue, setEditedValue] = useState<object>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const initialScope = usePageStore((state) => state.initialScope);
  const pageData = usePageStore((state) => state.pageData);
  const slots = useBlockStore((state) => state.slots);
  const globalScope = useGlobalStore((state) => state.globalScope());

  const setMainMessage = useGlobalStore((state) => state.setMainMessage);

  const { workspace } = useParams<PathParams>();

  const { updateContentMutation } = useCrudMutations<any>({
    model: "content",
    setSelectedItem: () => {},
    setErrorMessage,
  });

  // Determine the value to display based on the active tab
  let jsonValue: object | null = null;
  let isReadOnly = false; // Default is false

  if (activeTab === "initialScope") {
    jsonValue = initialScope;
  } else if (activeTab === "actualScope") {
    jsonValue = pageData;
    isReadOnly = true; // Make actualScope read-only
  } else if (activeTab === "slotsPreview") {
    jsonValue = slots;
  } else if (activeTab === "globalScope") {
    jsonValue = globalScope;
    isReadOnly = true; // Make globalScope read-only
  }

  // Update editedValue when jsonValue changes
  useEffect(() => {
    setEditedValue(jsonValue || {});
  }, [jsonValue]);

  const handleChange = (value: object) => {
    setEditedValue(value);
  };

  const handleSave = () => {
    const resolvedWorkspace = workspace;
    if (!resolvedWorkspace) {
      setErrorMessage("Workspace is undefined. Cannot save content.");
      setMainMessage("Workspace is undefined. Cannot save content.", "error");
      return;
    }

    updateContentMutation.mutate(
      {
        model: "workspace", // Save to the 'workspace' model
        slug: resolvedWorkspace, // Use 'workspace' as the slug
        slot: "_pageData",
        content: editedValue,
      },
      {
        onSuccess: () => {
          setMainMessage("Initial scope saved successfully!", "success");
          setErrorMessage(null); // Clear any previous errors
        },
        onError: (error: any) => {
          const errorMsg = error?.message || "An error occurred.";
          setErrorMessage(errorMsg);
          setMainMessage(`Failed to save initial scope: ${errorMsg}`, "error");
        },
      }
    );
  };

  return (
    <div className="w-full sticky top-16">
      {/* Tabs to switch between scopes */}
      <div className="tabs tabs-lifted border-b border-base-200 mt-sm">
        <button
          className={`tab ${activeTab === "initialScope" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("initialScope")}
        >
          Initial Scope
        </button>
        <button
          className={`tab ${activeTab === "actualScope" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("actualScope")}
        >
          Actual Scope
        </button>
        <button
          className={`tab ${activeTab === "slotsPreview" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("slotsPreview")}
        >
          Slots Preview
        </button>
        <button
          className={`tab ${activeTab === "globalScope" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("globalScope")}
        >
          Global Scope
        </button>
      </div>

      {/* Display data in JSONBlock depending on the selected tab */}
      <JSONBlock
        id="json-block-id"
        label={
          activeTab === "initialScope"
            ? "Page scope range"
            : activeTab === "actualScope"
            ? "Actual page scope"
            : activeTab === "slotsPreview"
            ? "Slots Preview"
            : "Global Scope"
        }
        value={editedValue}
        isRequired={true}
        isReadOnly={isReadOnly}
        onChange={handleChange}
      />

      {/* Display error message if it exists */}
      {errorMessage && (
        <div className="bg-error text-white p-2 my-2 rounded">
          {errorMessage}
        </div>
      )}

      {/* Render the button only for Initial Scope tab */}
      {activeTab === "initialScope" && (
        <div className="p-sm">
          <button
            onClick={handleSave}
            className="btn btn-success btn-outline w-full"
          >
            <FiSave /> Update initial scope
          </button>
        </div>
      )}
    </div>
  );
};

export default ScopePanel;

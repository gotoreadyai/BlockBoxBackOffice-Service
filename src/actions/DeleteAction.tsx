/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { deleteItem } from "../services/genericService";
import { usePageStore } from "../stores/pageStore";
import { FetchItemsActionProps } from "../types/types";
import ActionMsg from "../components/uikit/ActionMsg";
import { useGlobalStore } from "../stores/globalStore";
import { genErrorMessage } from "../utils/actions";


const DeleteAction:  React.FC<FetchItemsActionProps> = ({
  scope,
  onActionResult,
}) => {
  const setMainMessage = useGlobalStore((state) => state.setMainMessage);
  const pageData = usePageStore((state) => state.pageData);
  const filters = useGlobalStore((state) => state.filters);

  const handleAction = async () => {
    if (!scope || !pageData[scope]) {
      alert("Scope is undefined or invalid.");
      return;
    }
  
    try {
      await deleteItem(scope, filters[scope].id);
      const successMsg = `Successfully delete item for scope: ${scope}`;
      setMainMessage(successMsg, "success");
      onActionResult(true);
     } catch (error: any) {
      setMainMessage(genErrorMessage(error, scope), "error");
    }
  };

  useEffect(() => {
    handleAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ActionMsg type="info">RUN: Delete to: {scope}</ActionMsg>;
};
export default DeleteAction;

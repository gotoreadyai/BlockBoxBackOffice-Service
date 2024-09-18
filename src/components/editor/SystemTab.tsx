// src/components/SystemTab.tsx
import React from "react";
import { FiAlertOctagon, FiCheck, FiPackage, FiSun, FiUser } from "react-icons/fi";
import { useTheme } from "../../providers/ThemeProvider";
import PreviewSwitch from "./PreviewSwitch";
import { useGlobalStore } from "../../stores/globalStore";
import ThemeSelector from "../uikit/ThemeSelector";
import { notifyText } from "../../utils/display";
import useNavigation from "../../hooks/useNavigation"; // Upewnij się, że ścieżka jest poprawna
import { useParams } from "react-router-dom";


const SystemTab: React.FC = () => {
  const { theme, updateTheme } = useTheme();
  const { mainMessage } = useGlobalStore((state) => ({
    mainMessage: state.mainMessage,
  }));

  const {  setUSParam } = useNavigation();
  const params = useParams<{ workspace: string; slug: string; action?: string }>();


  const action = params.action;

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTheme(event.target.value);
  };

  const handleRightbarClick = (value: string) => {
    setUSParam("rightbar", value);
    // Opcjonalnie: Dodaj powiadomienia lub inne akcje

  };

  return (
    <div
      className={`
        ${action === 'edit-document' ? 'bg-neutral' : 'bg-base-300'}
        sticky top-0 p-sm px-md  text-xs z-20 flex gap-0.5 w-full 
        border-b border-base-300 shadow-lg`}
    >
      <div className="dropdown">
        
        <button
          aria-label="Theme"
          role="button"
          className="btn btn-sm btn-square"
        >
          <FiSun />
        </button>
        <div className="dropdown-content z-[1] w-52 pb-2">
          <ThemeSelector theme={theme} handleThemeChange={handleThemeChange} />
        </div>
      </div>
      <PreviewSwitch />

      {mainMessage.message && (
        <div
          className={`${notifyText(
            mainMessage.type
          )} toast toast-center -top-2.5 toast-top animate-init-pulse text-xs`}
        >
          <div className="flex px-sm items-center py-sm p-md justify-center gap-sm bg-info-content rounded">
            {mainMessage.type === "error" && (
              <FiAlertOctagon className="text-base" />
            )}
            {mainMessage.type === "success" && <FiCheck />}
            {mainMessage.message}
          </div>
        </div>
      )}

      <div className="flex-1"></div>

      <button
        className="btn btn-sm btn-square"
        onClick={() => handleRightbarClick("workspaces")}
        aria-label="Workspaces"
      >
        <FiPackage />
      </button>

      <button
        className="btn btn-sm btn-square"
        onClick={() => handleRightbarClick("user")}
        aria-label="Użytkownik"
      >
        <FiUser />
      </button>
    </div>
  );
};

export default SystemTab;

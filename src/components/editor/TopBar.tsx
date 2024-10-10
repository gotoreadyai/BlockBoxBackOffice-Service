// src/components/SystemTab.tsx
import React, { useContext } from "react";
import {
  FiPackage,
  FiSun,
  FiUploadCloud,
  FiUser,
  FiUserCheck,
} from "react-icons/fi";
import { useTheme } from "../../providers/ThemeProvider";
import PreviewSwitch from "./PreviewSwitch";
import ThemeSelector from "../uikit/ThemeSelector";

import useNavigation from "../../hooks/useNavigation"; // Upewnij się, że ścieżka jest poprawna
import { useNavigate, useParams } from "react-router-dom";
import { createItem } from "../../services/genericService";

import NotificationMsg from "../uikit/NotificationMsg";
import { UserContext } from "../../providers/UserProvider";
import { useBlockStore, useGlobalStore } from "../../stores";

const TopBar: React.FC = () => {
  const { theme, updateTheme } = useTheme();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const { setUSParam } = useNavigation();
  const params = useParams<{
    workspace: string;
    slug: string;
    action?: string;
  }>();

  const action = params.action;

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTheme(event.target.value);
  };

  const handleRightbarClick = (value: string) => {
    setUSParam("rightbar", value);
    // Opcjonalnie: Dodaj powiadomienia lub inne akcje
  };

  const slots = useBlockStore((state) => state.slots);
  const setMainMessage = useGlobalStore((state) => state.setMainMessage);

  return (
    <>
      <div
        className={`
      ${action === "edit-document" ? "bg-neutral" : "bg-base-300"}
      sticky top-0 p-sm px-md  text-xs z-30 flex gap-0.5 w-full 
      border-b border-base-300 shadow-lg select-none`}
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
            <ThemeSelector
              theme={theme}
              handleThemeChange={handleThemeChange}
            />
          </div>
        </div>
        <PreviewSwitch />

        <NotificationMsg />

        <button
          className="btn btn-sm btn-square"
          onClick={() => navigate(`/dashboard/workspaces/`)}
          aria-label="Workspaces"
        >
          <FiPackage />
        </button>

        <button
          className="btn btn-sm btn-square"
          onClick={async () => {
            const filteredSlots = { ...slots };
            delete filteredSlots.footer;
            delete filteredSlots.header;
            const res = await createItem("seed", {
              name: params.slug,
              data: filteredSlots,
            });
            setMainMessage(`${res.message} w: ${res.filePath} `, "success"); // Set success message
          }}
          aria-label="Workspaces"
        >
          <FiUploadCloud />
        </button>

        <button
          className={`btn btn-sm btn-square ${user ? "text-success" : ""}`}
          onClick={() => handleRightbarClick("user")}
          aria-label="Użytkownik"
        >
          {user ? <FiUserCheck /> : <FiUser />}
        </button>
      </div>
    </>
  );
};

export default TopBar;

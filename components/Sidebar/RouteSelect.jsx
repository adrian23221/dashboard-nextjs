"use client";

import React, { useState } from "react";
import {
  FiHome,
  FiPlus,
  FiSearch,
  FiFileText,
  FiBookOpen,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";

export const RouteSelect = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="space-y-1">
      <Route
        Icon={FiHome}
        selected={selected === "Dashboard"}
        title="Dashboard"
        onClick={() => setSelected("Dashboard")}
      />
      <Route
        Icon={FiPlus}
        selected={selected === "Add"}
        title="Add"
        onClick={() => setSelected("Add")}
      />
      <Route
        Icon={FiSearch}
        selected={selected === "Search"}
        title="Search"
        onClick={() => setSelected("Search")}
      />
      <Route
        Icon={FiFileText}
        selected={selected === "Documents"}
        title="Documents"
        onClick={() => setSelected("Documents")}
      />
      <Route
        Icon={FiBookOpen}
        selected={selected === "Resources"}
        title="Resources"
        onClick={() => setSelected("Resources")}
      />
      <Route
        Icon={FiUsers}
        selected={selected === "Accessibility"}
        title="Accessibility"
        onClick={() => setSelected("Accessibility")}
      />
      <Route
        Icon={FiMessageCircle}
        selected={selected === "Chat"}
        title="Chat"
        onClick={() => setSelected("Chat")}
      />
    </div>
  );
};

const Route = ({ selected, Icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-red-500" : ""} />
      <span>{title}</span>
    </button>
  );
};

import React from "react";
import { RouteSelect } from "./RouteSelect";
import { Logo } from "./Logo";

export const Sidebar = () => {
  return (
    <div className="bg-stone-50 rounded-xl shadow p-2">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <Logo />
        <RouteSelect />
      </div>
    </div>
  );
};

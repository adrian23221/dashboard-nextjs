"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RouteSelect } from "./RouteSelect";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Top bar: hamburger button + logo */}
      <div className="flex items-center justify-between mb-2">
        {/* Hamburger button (left) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-stone-700 p-2 rounded-md border border-stone-300"
        >
          <FiMenu className="w-5 h-5" />
        </button>

        {/* Logo (right) */}
        <button className="p-1 rounded transition-colors hover:bg-stone-200">
          <img
            src="/TopScore_Logo.png"
            alt="TopScore Logo"
            className="h-6 w-auto"
          />
        </button>
      </div>

      {/* Slide-down Menu */}
      {open && (
        <div className="bg-white rounded shadow-md p-2 mb-6">
          <RouteSelect />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;

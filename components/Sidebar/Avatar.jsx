"use client";
import React, { useState, useEffect, useRef } from "react";

export const Avatar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="mt-2 border-stone-300 relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center"
      >
        <img src="/avatar.svg" alt="avatar" className="size-8 shrink-0" />
        <div>
          <span className="text-sm font-bold block">Adrian Pruszkowski</span>
          <span className="text-xs block text-stone-500">
            adrian@unseen-group.com
          </span>
        </div>
      </button>
      {open && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-stone-200 rounded shadow-lg w-40 text-sm">
          <button className="block w-full text-left px-4 py-2 hover:bg-stone-100">
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

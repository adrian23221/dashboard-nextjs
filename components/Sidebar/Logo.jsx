import React from "react";

export const Logo = () => {
  return (
    <div className=" mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="/TopScore_Logo.png"
          alt="TopScore logo"
          className="size-auto shrink-0"
        />
      </button>
    </div>
  );
};

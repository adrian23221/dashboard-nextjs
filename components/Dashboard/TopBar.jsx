import React from "react";
import { Avatar } from "../Sidebar/Avatar";

function TopBar() {
  const today = new Date().toLocaleDateString("en-UK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="border-b px-4 mb-4  pb-4 border-stone-200 bg-stone-50 rounded-xl">
      <div className="flex items-center justify-between p-0.5">
        <div className="hidden md:block">
          <span className="text-sm font-bold block">Good morning, Adrian!</span>
          <span className="text-xs block text-stone-500">{today}</span>
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default TopBar;

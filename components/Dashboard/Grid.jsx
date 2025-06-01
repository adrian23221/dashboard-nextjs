import React from "react";
import CampaignFilter from "./CampaignFilter.jsx";
import StatCards from "./StatCards.jsx";
import ExerciseTable from "./ExerciseTable.jsx";
import AssessorAverages from "./AssessorAverages.jsx";

function Grid() {
  return (
    <div className="px-4 space-y-4 rounded-xl shadow bg-stone-50 pb-5">
      <CampaignFilter />
      <StatCards />
      <ExerciseTable />
      <AssessorAverages />
    </div>
  );
}

export default Grid;

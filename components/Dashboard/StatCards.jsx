import React from "react";
import { FiUser, FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";

const Card = ({ icon: Icon, label, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 w-full transition hover:shadow-md">
      <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-stone-500">{label}</p>
        <p className="text-xl font-semibold text-stone-800">{value}</p>
      </div>
    </div>
  );
};

const StatCards = () => {
  const stats = [
    { icon: FiUser, label: "Candidates", value: "16" },
    { icon: FiCheckCircle, label: "Assessors", value: "16" },
    { icon: FiClock, label: "Pending exercise", value: "94" },
    { icon: FiXCircle, label: "Completed exercise", value: "11" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
        />
      ))}
    </div>
  );
};
export default StatCards;

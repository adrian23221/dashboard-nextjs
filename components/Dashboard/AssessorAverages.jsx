const dummyData = [
  {
    name: "Charlotte Hek",
    scores: ["1.7", "0", "0", "0", "", ""],
  },
  {
    name: "Lewis Whitehead",
    scores: ["4", "4", "3", "3", "1", "2"],
  },
  {
    name: "Saeed Assessor",
    scores: ["0", "0", "0", "0", "", ""],
  },
  {
    name: "Tammy Ross",
    scores: ["0", "0", "0", "0", "0", "0"],
  },
  {
    name: "Samantha Lee",
    scores: ["0", "0", "0", "0", "", ""],
  },
  {
    name: "Sophie Thomas",
    scores: ["0", "0", "0", "0", "", ""],
  },
];

const headers = [
  "Teamwork (5)",
  "Customer Focus (5)",
  "Analytical Thinking (5)",
  "Commercial Acumen (5)",
  "Customer Focus (5)",
  "Problem Solving (5)",
];

const getColor = (value) => {
  if (value === "") return "bg-white";
  const val = parseFloat(value);
  if (val === 0) return "bg-red-500 text-white";
  if (val <= 1.7) return "bg-red-600 text-white";
  if (val <= 2.9) return "bg-orange-400 text-white";
  if (val <= 3.9) return "bg-yellow-300 text-black";
  return "bg-teal-700 text-white";
};

const AssessorAverages = () => {
  return (
    <div className="overflow-auto mt-6 ">
      <div className="pb-6">
        <h2 className="text-2xl font-bold mb-6 text-stone-800">
          Assessor averages
        </h2>
      </div>
      <div className="p-5 bg-white shadow rounded-xl">
        <table className="min-w-full table-auto text-sm text-center divide-y divide-gray-200 rounded p-3">
          <thead className="bg-slate-100 sticky top-0 z-10 shadow-sm">
            <tr>
              <th className="p-4 text-left font-semibold text-stone-700 bg-slate-200">
                Assessor Name
              </th>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="p-4 font-medium text-stone-600 bg-yellow-50"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {dummyData.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 text-left font-medium text-stone-800 whitespace-nowrap">
                  {row.name}
                </td>
                {row.scores.map((score, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 font-semibold text-sm rounded ${getColor(
                      score
                    )}`}
                  >
                    {score}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssessorAverages;

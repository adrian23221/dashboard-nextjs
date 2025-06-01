const exerciseData = [
  { name: "Presentation", score: "0.98 / 20" },
  { name: "Group Presentation", score: "1.6 / 15" },
  { name: "Interview of somesort", score: "1.5 / 28" },
  { name: "Written Exercise / Preparation Work", score: "1.17 / 15" },
  { name: "Funky Interview", score: "2 / 4" },
  { name: "Strengths-Based Interview", score: "0 / 100" },
  { name: "In Tray VS", score: "0 / 5" },
  { name: "data science test", score: "0 / 290" },
  { name: "UI Test Exercise 123", score: "0 / 5" },
  { name: "Question ordering test", score: "7 / 10" },
  { name: "Case-Study Written Exercise", score: "0 / 5" },
  { name: "Written Exercise Dec 23", score: "0 / 15" },
  { name: "Fresh Exercise - Non-Sequential Scoring", score: "64.05 / 125" },
];

export default function ExerciseTable() {
  return (
    <div className="bg-stone-50  py-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-stone-800">
        Exercise averages across all candidates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {exerciseData.map((exercise, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 w-full transition hover:shadow-md"
          >
            <div>
              <p className="text-sm text-stone-500">{exercise.name}</p>
              <p className="text-xl font-semibold text-stone-800">
                {exercise.score}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

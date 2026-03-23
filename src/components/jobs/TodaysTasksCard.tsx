import { ChevronRight, Info } from "lucide-react";

const tasks = [
  { id: 1, title: "Electrical Services 14 Team Meeting", time: "09AM - 10AM", avatar: "🧔🏾", ring: "ring-emerald-500/60" },
  { id: 2, title: "Electrical Services 14 Team Meeting", time: "09AM - 10AM", avatar: "👩🏽", ring: "ring-orange-500/60" },
  { id: 3, title: "Electrical Services 14 Team Meeting", time: "09AM - 10AM", avatar: "👨🏻", ring: "ring-blue-500/60" },
  { id: 4, title: "Electrical Services 14 Team Meeting", time: "09AM - 10AM", avatar: "👩🏾", ring: "ring-amber-500/60" },
];

export function TodaysTasksCard() {
  return (
    <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-semibold tracking-tight text-white">
            Today&apos;s Task
          </h3>
          <Info className="h-4 w-4 text-slate-500" />
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
          View All
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4"
          >
            <div className="mb-3 text-lg font-medium text-white">
              {task.title}
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 ring-2 ${task.ring}`}
              >
                {task.avatar}
              </div>
              <span>{task.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
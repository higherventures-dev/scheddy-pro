import { ChevronRight } from "lucide-react";

const topJobs = [
  { title: "Electrical", subtitle: "12+ Service", value: "$100K", icon: "⚡" },
  { title: "Plumbing", subtitle: "122 files", value: "$100K", icon: "🔧" },
  { title: "Cleaning", subtitle: "122 files", value: "$100K", icon: "🧹" },
  { title: "Pest Control", subtitle: "112 files", value: "$100K", icon: "🪲" },
];

export function TopJobsCard() {
  return (
    <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-3xl font-semibold tracking-tight text-white">
          Top Jobs
        </h3>

        <button className="inline-flex items-center gap-2 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
          View All
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mb-3 grid grid-cols-[1fr_auto] px-4 text-sm text-slate-500">
        <div>Job title</div>
        <div>Category</div>
      </div>

      <div className="space-y-4">
        {topJobs.map((job) => (
          <div
            key={job.title}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/5 text-xl">
              {job.icon}
            </div>

            <div>
              <div className="text-lg font-medium text-white">{job.title}</div>
              <div className="text-sm text-slate-500">{job.subtitle}</div>
            </div>

            <div className="text-lg font-semibold text-slate-200">
              {job.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
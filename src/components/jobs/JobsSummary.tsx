import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Job } from "@/lib/jobs/jobs-data";

interface Props {
  jobs: Job[];
  setStatusFilter: (s: string) => void;
}

type SummaryCardItem = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  status: string;
  chartColor: string;
  bars: number[];
};

function SummarySparkBars({
  bars,
  colorClass,
}: {
  bars: number[];
  colorClass: string;
}) {
  return (
    <div className="flex h-8 items-end gap-1">
      {bars.map((bar, index) => (
        <div
          key={index}
          className={`w-1 rounded-full ${colorClass}`}
          style={{ height: `${bar}px` }}
        />
      ))}
    </div>
  );
}

function SummaryCard({
  item,
  onClick,
}: {
  item: SummaryCardItem;
  onClick: () => void;
}) {
  const isUp = item.trend === "up";

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-slate-800"
    >
      <div className="mb-2 text-[13px] font-medium text-slate-200">
        {item.title}
      </div>

      <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
        <span
          className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
            isUp
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-rose-500/15 text-rose-400"
          }`}
        >
          {isUp ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
        </span>
        <span>{item.change}</span>
      </div>

      <div className="flex items-end justify-between gap-3">
        <div className="text-3xl font-semibold tracking-tight text-white">
          {item.value}
        </div>

        <SummarySparkBars bars={item.bars} colorClass={item.chartColor} />
      </div>
    </button>
  );
}

export function JobsSummary({ jobs, setStatusFilter }: Props) {
  const activeJobs = jobs.length;
  const inProgressJobs = jobs.filter((j) => j.status === "In Progress").length;
  const finishedJobs = jobs.filter((j) => j.status === "Completed").length;
  const newLeads = jobs.filter((j) => j.status === "New").length;
  const waitingResponse = jobs.filter(
    (j) => j.status === "Quote Submitted" || j.status === "Approved"
  ).length;

  const summaryItems: SummaryCardItem[] = [
    {
      title: "Active Jobs",
      value: String(activeJobs).padStart(2, "0"),
      change: "+12.2%",
      trend: "up",
      status: "All",
      chartColor: "bg-blue-400",
      bars: [12, 24, 17, 15, 22, 18, 12],
    },
    {
      title: "Jobs In Progress",
      value: String(inProgressJobs).padStart(2, "0"),
      change: "-31.1%",
      trend: "down",
      status: "In Progress",
      chartColor: "bg-orange-400",
      bars: [10, 24, 19, 15, 21, 14, 17],
    },
    {
      title: "Finished Jobs",
      value: String(finishedJobs).padStart(2, "0"),
      change: "+3.3%",
      trend: "up",
      status: "Completed",
      chartColor: "bg-green-400",
      bars: [11, 25, 15, 20, 17, 22, 16],
    },
    {
      title: "New Leads",
      value: String(newLeads).padStart(2, "0"),
      change: "+31.1%",
      trend: "up",
      status: "New",
      chartColor: "bg-violet-400",
      bars: [10, 24, 17, 14, 22, 16, 13],
    },
    {
      title: "Waiting Response",
      value: String(waitingResponse).padStart(2, "0"),
      change: "+31.1%",
      trend: "up",
      status: "Quote Submitted",
      chartColor: "bg-blue-400",
      bars: [11, 25, 16, 18, 22, 15, 17],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      {summaryItems.map((item) => (
        <SummaryCard
          key={item.title}
          item={item}
          onClick={() => setStatusFilter(item.status)}
        />
      ))}
    </div>
  );
}
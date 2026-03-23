import { ChevronDown, ChevronRight, Plus } from "lucide-react";

const quotes = [
  {
    id: 1,
    name: "Lucian Obrien",
    date: "9 Jan 2023",
    time: "6:08 PM",
    amount: "$34.30",
    status: "Approve",
    avatar: "🧔🏻",
  },
  {
    id: 2,
    name: "Lucian Obrien",
    date: "9 Jan 2023",
    time: "6:08 PM",
    amount: "$34.30",
    status: "Approve",
    avatar: "👨🏽",
  },
  {
    id: 3,
    name: "Lucian Obrien",
    date: "9 Jan 2023",
    time: "6:08 PM",
    amount: "$34.30",
    status: "Pending",
    avatar: "🧑🏻",
  },
  {
    id: 4,
    name: "Lucian Obrien",
    date: "9 Jan 2023",
    time: "6:08 PM",
    amount: "$34.30",
    status: "Approve",
    avatar: "👩🏾",
  },
  {
    id: 5,
    name: "Lucian Obrien",
    date: "9 Jan 2023",
    time: "6:08 PM",
    amount: "$34.30",
    status: "Pending",
    avatar: "👩🏻",
  },
];

function StatusPill({ status }: { status: "Approve" | "Pending" }) {
  const styles =
    status === "Approve"
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : "bg-orange-500/10 text-orange-400 border-orange-500/20";

  return (
    <span
      className={`inline-flex min-w-[88px] justify-center rounded-xl border px-3 py-2 text-sm font-medium ${styles}`}
    >
      {status}
    </span>
  );
}

export function QuotesCard() {
  return (
    <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-white">
            Quotes
          </h3>
          <div className="mt-1 text-sm text-slate-500">Sales Analysis</div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-3 text-sm font-medium text-orange-400">
          Create New
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/30">
        <div className="grid grid-cols-[1.5fr_1.1fr_0.9fr_0.9fr_40px] items-center gap-4 border-b border-slate-800 px-4 py-4 text-sm text-slate-400">
          <div className="inline-flex items-center gap-2">
            Job Title
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="inline-flex items-center gap-2">
            Date Sent
            <ChevronDown className="h-4 w-4" />
          </div>
          <div>Amount</div>
          <div>Status</div>
          <div />
        </div>

        <div className="divide-y divide-slate-800">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="grid grid-cols-[1.5fr_1.1fr_0.9fr_0.9fr_40px] items-center gap-4 px-4 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-lg">
                  {quote.avatar}
                </div>
                <div className="text-base font-medium text-white">
                  {quote.name}
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="font-medium text-slate-200">{quote.date}</span>
                <span className="text-slate-500">{quote.time}</span>
              </div>

              <div className="text-lg font-medium text-slate-200">
                {quote.amount}
              </div>

              <div>
                <StatusPill status={quote.status as "Approve" | "Pending"} />
              </div>

              <button className="text-slate-500 transition hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
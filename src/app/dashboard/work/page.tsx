"use client";

import React, { useMemo, useState } from "react";
import {
  CalendarRange,
  KanbanSquare,
  List,
  Search,
  Briefcase,
} from "lucide-react";

type WorkStatus =
  | "Requested"
  | "Assigned"
  | "Scheduled"
  | "In Progress"
  | "Review"
  | "Completed";

type WorkPriority = "Low" | "Medium" | "High";

type WorkItem = {
  id: string;
  title: string;
  jobId: string;
  jobName: string;
  assignee: string;
  status: WorkStatus;
  priority: WorkPriority;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
  amount: number;
  location: string;
  description: string;
};

const WORK_ITEMS: WorkItem[] = [
  {
    id: "W-101",
    title: "Initial site inspection",
    jobId: "JOB-001",
    jobName: "North Ridge Roofing",
    assignee: "Andre",
    status: "Completed",
    priority: "Medium",
    start: "2026-03-02",
    end: "2026-03-03",
    amount: 900,
    location: "Phoenix, AZ",
    description: "Inspect roof condition and capture photos.",
  },
  {
    id: "W-102",
    title: "Material delivery",
    jobId: "JOB-001",
    jobName: "North Ridge Roofing",
    assignee: "Maya",
    status: "Scheduled",
    priority: "High",
    start: "2026-03-14",
    end: "2026-03-15",
    amount: 2400,
    location: "Phoenix, AZ",
    description: "Deliver shingles, flashing, and safety equipment.",
  },
  {
    id: "W-103",
    title: "Roof tear-off",
    jobId: "JOB-001",
    jobName: "North Ridge Roofing",
    assignee: "Andre",
    status: "Assigned",
    priority: "High",
    start: "2026-03-16",
    end: "2026-03-18",
    amount: 5200,
    location: "Phoenix, AZ",
    description: "Remove old roofing materials and prep deck.",
  },
  {
    id: "W-104",
    title: "Panel load calculation",
    jobId: "JOB-002",
    jobName: "Sunline Solar Upgrade",
    assignee: "Nina",
    status: "Review",
    priority: "Medium",
    start: "2026-03-05",
    end: "2026-03-07",
    amount: 1200,
    location: "San Diego, CA",
    description: "Review load requirements and document findings.",
  },
  {
    id: "W-105",
    title: "Permit package submission",
    jobId: "JOB-002",
    jobName: "Sunline Solar Upgrade",
    assignee: "Victor",
    status: "Requested",
    priority: "Medium",
    start: "2026-03-13",
    end: "2026-03-14",
    amount: 650,
    location: "San Diego, CA",
    description: "Submit revised permit packet to city reviewer.",
  },
  {
    id: "W-106",
    title: "Array installation",
    jobId: "JOB-002",
    jobName: "Sunline Solar Upgrade",
    assignee: "Nina",
    status: "In Progress",
    priority: "High",
    start: "2026-03-11",
    end: "2026-03-17",
    amount: 9800,
    location: "San Diego, CA",
    description: "Install rails, panels, and inverter connections.",
  },
  {
    id: "W-107",
    title: "Drain line replacement",
    jobId: "JOB-003",
    jobName: "Westview Plumbing Repair",
    assignee: "Leo",
    status: "Assigned",
    priority: "High",
    start: "2026-03-15",
    end: "2026-03-16",
    amount: 3100,
    location: "Las Vegas, NV",
    description: "Replace damaged drain section under slab access.",
  },
  {
    id: "W-108",
    title: "Leak detection",
    jobId: "JOB-003",
    jobName: "Westview Plumbing Repair",
    assignee: "Clara",
    status: "Completed",
    priority: "Low",
    start: "2026-03-01",
    end: "2026-03-02",
    amount: 450,
    location: "Las Vegas, NV",
    description: "Trace leak source and mark repair points.",
  },
  {
    id: "W-109",
    title: "System pressure test",
    jobId: "JOB-003",
    jobName: "Westview Plumbing Repair",
    assignee: "Leo",
    status: "Scheduled",
    priority: "Medium",
    start: "2026-03-18",
    end: "2026-03-19",
    amount: 700,
    location: "Las Vegas, NV",
    description: "Run pressure testing after replacement work.",
  },
  {
    id: "W-110",
    title: "Breaker panel prep",
    jobId: "JOB-004",
    jobName: "Canyon Electric Refresh",
    assignee: "Sofia",
    status: "Requested",
    priority: "Medium",
    start: "2026-03-12",
    end: "2026-03-13",
    amount: 1100,
    location: "Salt Lake City, UT",
    description: "Prep existing panel for new breakers and labels.",
  },
  {
    id: "W-111",
    title: "Main panel replacement",
    jobId: "JOB-004",
    jobName: "Canyon Electric Refresh",
    assignee: "Sofia",
    status: "In Progress",
    priority: "High",
    start: "2026-03-10",
    end: "2026-03-14",
    amount: 6700,
    location: "Salt Lake City, UT",
    description: "Replace main service panel and reconnect circuits.",
  },
  {
    id: "W-112",
    title: "Final city inspection",
    jobId: "JOB-004",
    jobName: "Canyon Electric Refresh",
    assignee: "Marcus",
    status: "Scheduled",
    priority: "Low",
    start: "2026-03-20",
    end: "2026-03-20",
    amount: 300,
    location: "Salt Lake City, UT",
    description: "Coordinate final approval with city inspector.",
  },
];

const STATUSES: WorkStatus[] = [
  "Requested",
  "Assigned",
  "Scheduled",
  "In Progress",
  "Review",
  "Completed",
];

type ViewMode = "list" | "board" | "timeline";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function statusClasses(status: WorkStatus) {
  switch (status) {
    case "Requested":
      return "bg-slate-500/15 text-slate-300 border-slate-500/20";
    case "Assigned":
      return "bg-sky-500/15 text-sky-300 border-sky-500/20";
    case "Scheduled":
      return "bg-violet-500/15 text-violet-300 border-violet-500/20";
    case "In Progress":
      return "bg-amber-500/15 text-amber-300 border-amber-500/20";
    case "Review":
      return "bg-orange-500/15 text-orange-300 border-orange-500/20";
    case "Completed":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-500/20";
  }
}

function priorityDot(priority: WorkPriority) {
  switch (priority) {
    case "Low":
      return "bg-slate-400";
    case "Medium":
      return "bg-sky-400";
    case "High":
      return "bg-orange-400";
  }
}

function daysBetween(start: Date, end: Date) {
  const ms = end.getTime() - start.getTime();
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
}

function ListView({ items }: { items: WorkItem[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      <div className="grid grid-cols-[110px_1.6fr_1.2fr_120px_120px_140px_150px] gap-3 border-b border-slate-800 px-5 py-4 text-xs uppercase tracking-wide text-slate-400">
        <div>ID</div>
        <div>Work</div>
        <div>Job</div>
        <div>Assignee</div>
        <div>Status</div>
        <div>Dates</div>
        <div>Amount</div>
      </div>

      <div className="divide-y divide-slate-800">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[110px_1.6fr_1.2fr_120px_120px_140px_150px] gap-3 px-5 py-4 text-sm"
          >
            <div className="font-medium text-slate-200">{item.id}</div>

            <div>
              <div className="font-medium text-white">{item.title}</div>
              <div className="mt-1 text-xs text-slate-500">{item.location}</div>
            </div>

            <div>
              <div className="font-medium text-slate-200">{item.jobName}</div>
              <div className="mt-1 text-xs text-slate-500">{item.jobId}</div>
            </div>

            <div className="text-slate-300">{item.assignee}</div>

            <div>
              <span
                className={`inline-flex rounded-xl border px-2.5 py-1 text-xs font-medium ${statusClasses(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            <div className="text-slate-400">
              {formatDate(item.start)} - {formatDate(item.end)}
            </div>

            <div className="font-medium text-slate-200">
              {formatMoney(item.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BoardView({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-6">
      {STATUSES.map((status) => {
        const columnItems = items.filter((item) => item.status === status);

        return (
          <div
            key={status}
            className="rounded-3xl border border-slate-800 bg-slate-900"
          >
            <div className="border-b border-slate-800 px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="font-medium text-white">{status}</div>
                <div className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">
                  {columnItems.length}
                </div>
              </div>
            </div>

            <div className="space-y-3 p-3">
              {columnItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950/50 p-3"
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div className="text-sm font-medium text-white">
                      {item.title}
                    </div>
                    <span
                      className={`mt-1 h-2.5 w-2.5 rounded-full ${priorityDot(
                        item.priority
                      )}`}
                    />
                  </div>

                  <div className="mb-2 text-xs text-slate-400">
                    {item.jobName}
                  </div>

                  <div className="mb-3 text-xs text-slate-500">
                    {formatDate(item.start)} - {formatDate(item.end)}
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{item.assignee}</span>
                    <span className="font-medium text-slate-200">
                      {formatMoney(item.amount)}
                    </span>
                  </div>
                </div>
              ))}

              {columnItems.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-800 p-4 text-center text-xs text-slate-500">
                  No work items
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TimelineView({ items }: { items: WorkItem[] }) {
  const starts = items.map((i) => new Date(i.start + "T00:00:00"));
  const ends = items.map((i) => new Date(i.end + "T00:00:00"));

  const minDate = new Date(Math.min(...starts.map((d) => d.getTime())));
  const maxDate = new Date(Math.max(...ends.map((d) => d.getTime())));
  const totalDays = Math.max(1, daysBetween(minDate, maxDate) + 1);

  const timelineDays = Array.from({ length: totalDays }, (_, i) => {
    const d = new Date(minDate);
    d.setDate(minDate.getDate() + i);
    return d;
  });

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      <div className="overflow-x-auto">
        <div
          className="min-w-[1100px]"
          style={{
            gridTemplateColumns: `280px repeat(${timelineDays.length}, minmax(32px, 1fr))`,
          }}
        >
          <div
            className="grid border-b border-slate-800"
            style={{
              gridTemplateColumns: `280px repeat(${timelineDays.length}, minmax(32px, 1fr))`,
            }}
          >
            <div className="border-r border-slate-800 px-4 py-4 text-xs uppercase tracking-wide text-slate-400">
              Work Item
            </div>

            {timelineDays.map((day) => (
              <div
                key={day.toISOString()}
                className="border-r border-slate-800 px-2 py-4 text-center text-xs text-slate-500"
              >
                {day.getDate()}
              </div>
            ))}
          </div>

          {items.map((item) => {
            const itemStart = new Date(item.start + "T00:00:00");
            const itemEnd = new Date(item.end + "T00:00:00");

            const offsetDays = daysBetween(minDate, itemStart);
            const spanDays = Math.max(1, daysBetween(itemStart, itemEnd) + 1);

            return (
              <div
                key={item.id}
                className="grid border-b border-slate-800"
                style={{
                  gridTemplateColumns: `280px repeat(${timelineDays.length}, minmax(32px, 1fr))`,
                }}
              >
                <div className="border-r border-slate-800 px-4 py-4">
                  <div className="text-sm font-medium text-white">{item.title}</div>
                  <div className="mt-1 text-xs text-slate-400">{item.jobName}</div>
                </div>

                <div
                  className="relative col-span-full h-16"
                  style={{
                    gridColumn: `2 / span ${timelineDays.length}`,
                  }}
                >
                  <div className="absolute inset-0 grid"
                    style={{
                      gridTemplateColumns: `repeat(${timelineDays.length}, minmax(32px, 1fr))`,
                    }}
                  >
                    {timelineDays.map((day) => (
                      <div
                        key={day.toISOString()}
                        className="border-r border-slate-800/70"
                      />
                    ))}
                  </div>

                  <div
                    className="absolute top-1/2 h-8 -translate-y-1/2 rounded-xl border border-sky-500/20 bg-sky-500/15 px-3 text-xs font-medium text-sky-300"
                    style={{
                      left: `${(offsetDays / timelineDays.length) * 100}%`,
                      width: `${(spanDays / timelineDays.length) * 100}%`,
                    }}
                  >
                    <div className="flex h-full items-center justify-between gap-3 overflow-hidden whitespace-nowrap">
                      <span>{item.id}</span>
                      <span>{item.assignee}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [view, setView] = useState<ViewMode>("list");
  const [jobFilter, setJobFilter] = useState("All Jobs");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [search, setSearch] = useState("");

  const jobs = useMemo(() => {
    const unique = Array.from(new Set(WORK_ITEMS.map((item) => item.jobName)));
    return ["All Jobs", ...unique];
  }, []);

  const filteredItems = useMemo(() => {
    return WORK_ITEMS.filter((item) => {
      const matchesJob =
        jobFilter === "All Jobs" || item.jobName === jobFilter;

      const matchesStatus =
        statusFilter === "All Statuses" || item.status === statusFilter;

      const term = search.toLowerCase();
      const matchesSearch =
        `${item.id} ${item.title} ${item.jobName} ${item.assignee} ${item.location}`
          .toLowerCase()
          .includes(term);

      return matchesJob && matchesStatus && matchesSearch;
    });
  }, [jobFilter, statusFilter, search]);

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
            <p className="mt-1 text-sm text-slate-400">
              View work items as a list, kanban board, or timeline.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search work"
                className="h-11 w-[240px] rounded-2xl border border-slate-800 bg-slate-900 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-slate-700"
              />
            </div>

            <select
              value={jobFilter}
              onChange={(e) => setJobFilter(e.target.value)}
              className="h-11 rounded-2xl border border-slate-800 bg-slate-900 px-4 text-sm text-slate-200 outline-none"
            >
              {jobs.map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-11 rounded-2xl border border-slate-800 bg-slate-900 px-4 text-sm text-slate-200 outline-none"
            >
              <option>All Statuses</option>
              {STATUSES.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_auto]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-2 text-sm text-slate-400">Visible Work</div>
              <div className="text-3xl font-semibold text-white">
                {filteredItems.length}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-2 text-sm text-slate-400">Jobs</div>
              <div className="text-3xl font-semibold text-white">
                {new Set(filteredItems.map((i) => i.jobId)).size}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-2 text-sm text-slate-400">In Progress</div>
              <div className="text-3xl font-semibold text-white">
                {filteredItems.filter((i) => i.status === "In Progress").length}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-2 text-sm text-slate-400">Visible Value</div>
              <div className="text-3xl font-semibold text-white">
                {formatMoney(filteredItems.reduce((sum, i) => sum + i.amount, 0))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-3xl border border-slate-800 bg-slate-900 p-2">
            <button
              onClick={() => setView("list")}
              className={`inline-flex h-11 items-center gap-2 rounded-2xl px-4 text-sm font-medium transition ${
                view === "list"
                  ? "bg-slate-100 text-slate-950"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <List className="h-4 w-4" />
              List
            </button>

            <button
              onClick={() => setView("board")}
              className={`inline-flex h-11 items-center gap-2 rounded-2xl px-4 text-sm font-medium transition ${
                view === "board"
                  ? "bg-slate-100 text-slate-950"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <KanbanSquare className="h-4 w-4" />
              Board
            </button>

            <button
              onClick={() => setView("timeline")}
              className={`inline-flex h-11 items-center gap-2 rounded-2xl px-4 text-sm font-medium transition ${
                view === "timeline"
                  ? "bg-slate-100 text-slate-950"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <CalendarRange className="h-4 w-4" />
              Timeline
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/50 p-4">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
            <Briefcase className="h-4 w-4" />
            Showing{" "}
            <span className="font-medium text-slate-200">
              {filteredItems.length}
            </span>{" "}
            work items for{" "}
            <span className="font-medium text-slate-200">{jobFilter}</span>
          </div>

          {view === "list" && <ListView items={filteredItems} />}
          {view === "board" && <BoardView items={filteredItems} />}
          {view === "timeline" && <TimelineView items={filteredItems} />}
        </div>
      </div>
    </div>
  );
}
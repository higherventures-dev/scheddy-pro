"use client";

import { useMemo, useState } from "react";

import { JobsHeader } from "@/components/jobs/JobsHeader";
import { JobsMap } from "@/components/jobs/JobsMap";
import { JobsSummary } from "@/components/jobs/JobsSummary";
import { JobsFilters } from "@/components/jobs/JobsFilters";
import { JobsTable } from "@/components/jobs/JobsTable";
import { JobsCommunicationFeed } from "@/components/jobs/JobsCommunicationFeed";
import { JobsInsights } from "@/components/jobs/JobsInsights";

import { jobs, statuses, Job } from "@/lib/jobs/jobs-data";

export default function JobsPage() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [message, setMessage] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;

      const matchesSearch = `${job.city} ${job.state} ${job.type}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [statusFilter, search]);

  function sendMessage() {
    if (!message.trim() || !selectedJob) return;

    selectedJob.messages.push({
      id: String(Math.random()),
      author: "Vendor",
      text: message,
      time: "Just now",
    });

    setMessage("");
  }

  return (
    <div className="flex bg-slate-950 text-white">
      <div className="flex-1 p-6 space-y-6">
        <JobsHeader search={search} setSearch={setSearch} />

        <JobsMap
          jobs={filteredJobs}
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
        />

        <JobsSummary
          jobs={filteredJobs}
          setStatusFilter={setStatusFilter}
        />

        <JobsInsights />
      </div>

      <div className="w-[360px] border-l border-slate-800 bg-slate-900">
        <JobsCommunicationFeed
          selectedJob={selectedJob}
          message={message}
          setMessage={setMessage}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
}
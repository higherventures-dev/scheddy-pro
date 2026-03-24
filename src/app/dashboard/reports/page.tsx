export default function ReportsPage() {
  const reports = [
    {
      name: "Vendor Performance Summary",
      owner: "Operations",
      frequency: "Weekly",
      updated: "Today, 8:15 AM",
    },
    {
      name: "Invoice Aging Dashboard",
      owner: "Finance",
      frequency: "Daily",
      updated: "Today, 7:40 AM",
    },
    {
      name: "Payment Exception Rollup",
      owner: "Treasury",
      frequency: "Daily",
      updated: "Today, 7:05 AM",
    },
    {
      name: "Estimate Conversion Analysis",
      owner: "Revenue Ops",
      frequency: "Weekly",
      updated: "Yesterday, 4:30 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white [font-size:13px]">
      <div className="mx-auto max-w-[1500px] space-y-5 p-5">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Reports</h1>
            <p className="mt-1 text-sm text-slate-400">
              Review performance trends, operational summaries, and financial KPIs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="w-72 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Search reports..."
            />
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
              Create Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            ["Saved Reports", "18"],
            ["Scheduled Runs", "9"],
            ["Exports This Week", "43"],
            ["Data Freshness", "< 2 hrs"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
            >
              <div className="text-xs uppercase tracking-wide text-slate-400">
                {label}
              </div>
              <div className="mt-2 text-2xl font-semibold">{value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1.5fr_1fr] gap-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-200">
                Available Reports
              </h2>
              <span className="text-xs text-slate-400">4 active templates</span>
            </div>

            <div className="divide-y divide-slate-800">
              {reports.map((report) => (
                <div
                  key={report.name}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div>
                    <div className="font-medium text-white">{report.name}</div>
                    <div className="mt-1 text-sm text-slate-400">
                      Owner: {report.owner} • Frequency: {report.frequency}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-400">{report.updated}</span>
                    <button className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800">
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-sm font-semibold text-slate-200">KPI Snapshot</h2>
              <div className="mt-4 space-y-3">
                {[
                  ["Estimate Win Rate", "62%"],
                  ["Invoice Approval SLA", "91%"],
                  ["Payment Success Rate", "98.7%"],
                  ["Vendor Response Time", "3.1 hrs"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
                  >
                    <span className="text-slate-300">{label}</span>
                    <span className="font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-sm font-semibold text-slate-200">Insights</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>• Invoice approval performance is strongest in the Southwest region.</p>
                <p>• Payment exceptions trend lower when estimate revision rates are below 10%.</p>
                <p>• Roofing and HVAC continue to lead total job revenue contribution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
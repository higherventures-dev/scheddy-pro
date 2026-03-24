export default function EstimatesPage() {
  const estimates = [
    {
      id: "EST-1042",
      vendor: "West Coast Roofing",
      city: "Los Angeles, CA",
      service: "Roof Repair",
      amount: "$12,400",
      status: "Pending Review",
      submitted: "Mar 22, 2026",
    },
    {
      id: "EST-1043",
      vendor: "Summit HVAC",
      city: "Phoenix, AZ",
      service: "HVAC Replacement",
      amount: "$18,900",
      status: "Approved",
      submitted: "Mar 21, 2026",
    },
    {
      id: "EST-1044",
      vendor: "BlueLine Electrical",
      city: "Dallas, TX",
      service: "Panel Upgrade",
      amount: "$9,750",
      status: "Needs Revision",
      submitted: "Mar 20, 2026",
    },
    {
      id: "EST-1045",
      vendor: "Peak Plumbing",
      city: "Denver, CO",
      service: "Pipe Replacement",
      amount: "$7,200",
      status: "Pending Review",
      submitted: "Mar 19, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white [font-size:13px]">
      <div className="mx-auto max-w-[1500px] space-y-5 p-5">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Estimates</h1>
            <p className="mt-1 text-sm text-slate-400">
              Review submitted estimates, approvals, and revisions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="w-72 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Search vendor, city, service..."
            />
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
              New Estimate
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            ["Open Estimates", "28"],
            ["Approved This Week", "11"],
            ["Avg Estimate", "$11.6K"],
            ["Revision Rate", "14%"],
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

        <div className="grid grid-cols-[1.7fr_1fr] gap-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-200">
                Estimate Queue
              </h2>
              <span className="text-xs text-slate-400">Last updated 5 min ago</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-950/40 text-slate-400">
                  <tr>
                    <th className="px-5 py-3 font-medium">Estimate ID</th>
                    <th className="px-5 py-3 font-medium">Vendor</th>
                    <th className="px-5 py-3 font-medium">Location</th>
                    <th className="px-5 py-3 font-medium">Service</th>
                    <th className="px-5 py-3 font-medium">Amount</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {estimates.map((estimate) => (
                    <tr
                      key={estimate.id}
                      className="border-t border-slate-800 text-slate-200"
                    >
                      <td className="px-5 py-4 font-medium text-white">{estimate.id}</td>
                      <td className="px-5 py-4">{estimate.vendor}</td>
                      <td className="px-5 py-4">{estimate.city}</td>
                      <td className="px-5 py-4">{estimate.service}</td>
                      <td className="px-5 py-4">{estimate.amount}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs">
                          {estimate.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-400">{estimate.submitted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-sm font-semibold text-slate-200">
                Approval Flow
              </h2>
              <div className="mt-4 space-y-3">
                {[
                  ["Submitted", "42"],
                  ["Under Review", "18"],
                  ["Approved", "25"],
                  ["Revision Requested", "6"],
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
              <h2 className="text-sm font-semibold text-slate-200">
                Notes
              </h2>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>• Revision activity is highest in HVAC and electrical scopes.</p>
                <p>• Los Angeles and Phoenix are producing the largest estimate totals.</p>
                <p>• Median approval turnaround is currently 2.1 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
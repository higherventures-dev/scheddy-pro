export default function InvoicesPage() {
  const invoices = [
    {
      id: "INV-3008",
      vendor: "West Coast Roofing",
      city: "Los Angeles, CA",
      amount: "$14,880",
      due: "Apr 2, 2026",
      status: "Pending Approval",
    },
    {
      id: "INV-3009",
      vendor: "Summit HVAC",
      city: "Phoenix, AZ",
      amount: "$19,200",
      due: "Mar 29, 2026",
      status: "Approved",
    },
    {
      id: "INV-3010",
      vendor: "BlueLine Electrical",
      city: "Dallas, TX",
      amount: "$8,460",
      due: "Apr 5, 2026",
      status: "Flagged",
    },
    {
      id: "INV-3011",
      vendor: "Peak Plumbing",
      city: "Denver, CO",
      amount: "$6,980",
      due: "Apr 1, 2026",
      status: "Scheduled",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white [font-size:13px]">
      <div className="mx-auto max-w-[1500px] space-y-5 p-5">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Invoices</h1>
            <p className="mt-1 text-sm text-slate-400">
              Monitor invoice approvals, due dates, and exceptions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="w-72 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Search invoice, vendor, city..."
            />
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            ["Open Invoices", "64"],
            ["Pending Approval", "$182K"],
            ["Overdue", "$31K"],
            ["Avg Processing Time", "3.4 days"],
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

        <div className="grid grid-cols-[1.8fr_1fr] gap-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-200">Invoice Ledger</h2>
              <span className="text-xs text-slate-400">Finance sync active</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-950/40 text-slate-400">
                  <tr>
                    <th className="px-5 py-3 font-medium">Invoice ID</th>
                    <th className="px-5 py-3 font-medium">Vendor</th>
                    <th className="px-5 py-3 font-medium">Location</th>
                    <th className="px-5 py-3 font-medium">Amount</th>
                    <th className="px-5 py-3 font-medium">Due Date</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-t border-slate-800">
                      <td className="px-5 py-4 font-medium text-white">{invoice.id}</td>
                      <td className="px-5 py-4 text-slate-200">{invoice.vendor}</td>
                      <td className="px-5 py-4 text-slate-200">{invoice.city}</td>
                      <td className="px-5 py-4 text-slate-200">{invoice.amount}</td>
                      <td className="px-5 py-4 text-slate-400">{invoice.due}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
                          {invoice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-sm font-semibold text-slate-200">
                Exceptions Queue
              </h2>
              <div className="mt-4 space-y-3">
                {[
                  ["Duplicate Check", "3"],
                  ["Amount Variance", "7"],
                  ["Missing Backup", "5"],
                  ["Vendor Hold", "2"],
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
              <h2 className="text-sm font-semibold text-slate-200">Highlights</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>• Roofing invoices are driving the highest total payable volume.</p>
                <p>• 12% of invoices require at least one manual validation step.</p>
                <p>• Average approval time is improving week over week.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
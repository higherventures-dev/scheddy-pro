export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-8812",
      vendor: "West Coast Roofing",
      method: "ACH",
      amount: "$14,880",
      status: "Scheduled",
      date: "Mar 28, 2026",
    },
    {
      id: "PAY-8813",
      vendor: "Summit HVAC",
      method: "Wire",
      amount: "$19,200",
      status: "Processing",
      date: "Mar 27, 2026",
    },
    {
      id: "PAY-8814",
      vendor: "BlueLine Electrical",
      method: "ACH",
      amount: "$8,460",
      status: "On Hold",
      date: "Mar 29, 2026",
    },
    {
      id: "PAY-8815",
      vendor: "Peak Plumbing",
      method: "Check",
      amount: "$6,980",
      status: "Completed",
      date: "Mar 25, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white [font-size:13px]">
      <div className="mx-auto max-w-[1500px] space-y-5 p-5">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Payments</h1>
            <p className="mt-1 text-sm text-slate-400">
              Track disbursements, payment methods, and vendor payout status.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="w-72 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Search payment, vendor, method..."
            />
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
              Initiate Batch
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            ["Scheduled Today", "$96K"],
            ["In Processing", "$41K"],
            ["Completed This Week", "$284K"],
            ["Holds", "4"],
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
              <h2 className="text-sm font-semibold text-slate-200">
                Payment Activity
              </h2>
              <span className="text-xs text-slate-400">Treasury window open</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-950/40 text-slate-400">
                  <tr>
                    <th className="px-5 py-3 font-medium">Payment ID</th>
                    <th className="px-5 py-3 font-medium">Vendor</th>
                    <th className="px-5 py-3 font-medium">Method</th>
                    <th className="px-5 py-3 font-medium">Amount</th>
                    <th className="px-5 py-3 font-medium">Date</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id} className="border-t border-slate-800">
                      <td className="px-5 py-4 font-medium text-white">{payment.id}</td>
                      <td className="px-5 py-4 text-slate-200">{payment.vendor}</td>
                      <td className="px-5 py-4 text-slate-200">{payment.method}</td>
                      <td className="px-5 py-4 text-slate-200">{payment.amount}</td>
                      <td className="px-5 py-4 text-slate-400">{payment.date}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
                          {payment.status}
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
              <h2 className="text-sm font-semibold text-slate-200">Payout Mix</h2>
              <div className="mt-4 space-y-3">
                {[
                  ["ACH", "68%"],
                  ["Wire", "19%"],
                  ["Check", "9%"],
                  ["Virtual Card", "4%"],
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
              <h2 className="text-sm font-semibold text-slate-200">Alerts</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>• 2 vendors require banking verification before release.</p>
                <p>• 1 high-value wire is awaiting treasury approval.</p>
                <p>• Same-day ACH volume is above weekly average.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
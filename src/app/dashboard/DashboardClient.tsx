'use client';

import type { VendorDashboardData } from '@/features/dashboard/services/getVendorDashboardData';

type Props = {
  vendorName: string;
  dashboardData: VendorDashboardData;
};

const STATUS_COLORS = {
  completed: 'bg-lime-500/80',
  inProgress: 'bg-sky-400/80',
  upcoming: 'bg-amber-400/85',
  overdue: 'bg-rose-500/85',
};

const PAYMENT_SEGMENT_COLORS = [
  '#6ee7b7',
  '#93c5fd',
  '#fbbf24',
  '#fb7185',
  '#a78bfa',
];

export default function DashboardClient({ dashboardData }: Props) {
  const totalStatus =
    dashboardData.workStatus.completed +
    dashboardData.workStatus.inProgress +
    dashboardData.workStatus.upcoming +
    dashboardData.workStatus.overdue;

  const paymentGradient = buildConicGradient(dashboardData.paymentStatuses);

  const maxValue = 10;
  const yAxisTicks = [10, 8, 6, 4, 2, 0];

  return (
    <main className="min-h-screen bg-[#070b1a] text-white">
      <div className="mx-auto max-w-7xl px-5">

        {/* HEADER */}
        <h2 className="text-xl font-semibold">Workload This Week</h2>
        <p className="mt-3 text-xs text-white/70">
          {dashboardData.workloadMessage}
        </p>

        {/* GRAPH */}
        <section className="mt-8 py-5">
          <div className="grid grid-cols-[32px_1fr] gap-3">

            <div className="relative h-[260px]">
              {yAxisTicks.map((tick, i) => {
                const top = `${(i / (yAxisTicks.length - 1)) * 100}%`;
                return (
                  <div
                    key={tick}
                    className="absolute left-0 -translate-y-1/2 text-[10px] text-white/40"
                    style={{ top }}
                  >
                    {tick}
                  </div>
                );
              })}
            </div>

            <div>
              <div className="relative h-[260px]">

                {yAxisTicks.map((_, i) => {
                  const top = `${(i / (yAxisTicks.length - 1)) * 100}%`;
                  return (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-white/10"
                      style={{ top }}
                    />
                  );
                })}

                <div className="absolute inset-0 grid grid-cols-7 items-end gap-4">
                  {dashboardData.workload.map((day) => {
                    const total =
                      day.completed + day.inProgress + day.upcoming + day.overdue;

                    const segments = [
                      { key: 'completed', value: day.completed, color: STATUS_COLORS.completed },
                      { key: 'inProgress', value: day.inProgress, color: STATUS_COLORS.inProgress },
                      { key: 'upcoming', value: day.upcoming, color: STATUS_COLORS.upcoming },
                      { key: 'overdue', value: day.overdue, color: STATUS_COLORS.overdue },
                    ];

                    return (
                      <div key={day.day} className="flex h-full flex-col items-center justify-end">
                        <div
                          className="flex w-full max-w-[70px] flex-col justify-end overflow-hidden rounded-sm"
                          style={{
                            height: `${(total / maxValue) * 100}%`,
                            backgroundColor: 'rgba(255,255,255,0.03)',
                          }}
                        >
                          {segments.map((segment) =>
                            segment.value > 0 ? (
                              <div
                                key={segment.key}
                                className={segment.color}
                                style={{
                                  height: `${(segment.value / Math.max(total, 1)) * 100}%`,
                                }}
                              />
                            ) : null
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-7 gap-4">
                {dashboardData.workload.map((day) => (
                  <div key={day.day} className="text-center text-[11px] text-white/60">
                    {day.day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-4 text-[11px] text-white/70">
            <Legend color="bg-lime-500/80" label="Completed" />
            <Legend color="bg-sky-400/80" label="In Progress" />
            <Legend color="bg-amber-400/85" label="Upcoming" />
            <Legend color="bg-rose-500/85" label="Overdue" />
          </div>
        </section>

        {/* SUMMARY CARDS */}
        <section className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {dashboardData.summaryCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 min-h-[108px] flex flex-col justify-center"
            >
              <div className="text-[11px] text-white/60">{card.label}</div>
              <div className="mt-2 text-lg font-semibold">{card.value}</div>
              {card.subtext && (
                <div className="mt-1 text-[11px] text-white/50">{card.subtext}</div>
              )}
            </div>
          ))}
        </section>

        {/* MAIN GRID */}
        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto_1.3fr]">

          {/* LEFT */}
          <div>
            <h3 className="text-sm font-medium">Work Status</h3>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="flex h-full w-full">
                <div className={STATUS_COLORS.completed} style={{ width: `${(dashboardData.workStatus.completed / totalStatus) * 100}%` }} />
                <div className={STATUS_COLORS.inProgress} style={{ width: `${(dashboardData.workStatus.inProgress / totalStatus) * 100}%` }} />
                <div className={STATUS_COLORS.upcoming} style={{ width: `${(dashboardData.workStatus.upcoming / totalStatus) * 100}%` }} />
                <div className={STATUS_COLORS.overdue} style={{ width: `${(dashboardData.workStatus.overdue / totalStatus) * 100}%` }} />
              </div>
            </div>

            <div className="mt-3 flex gap-3 text-[11px] text-white/60">
              <span>{dashboardData.workStatus.completed} done</span>
              <span>{dashboardData.workStatus.inProgress} active</span>
              <span>{dashboardData.workStatus.upcoming} next</span>
              <span className="text-rose-400">{dashboardData.workStatus.overdue} late</span>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-sm font-medium">Work to Do</h3>
              <div className="space-y-2">
                {dashboardData.workTodo.map((item) => (
                  <div key={item.id} className="border-b border-white/5 py-2">
                    <div className="flex justify-between">
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-[11px] text-white/60">{item.subtitle}</div>
                      </div>
                      <div className="text-[11px] text-white/50">{item.dueLabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden w-px bg-white/10 lg:block" />

          {/* RIGHT */}
          <div>
            <h3 className="mb-3 text-sm font-medium">Today’s Schedule</h3>

            <div className="space-y-2">
              {dashboardData.schedule.map((item) => (
                <div key={item.id} className="grid grid-cols-[72px_1fr_60px] gap-3 border-b border-white/5 py-2">
                  <div className="text-[11px] text-white/60">{item.time}</div>
                  <div>
                    <div className="text-sm font-medium">{item.customer}</div>
                    <div className="text-[11px] text-white/60">{item.title}</div>
                  </div>
                  <div className="text-[11px] text-white/50 text-right">
                    {item.assignee}
                  </div>
                </div>
              ))}
            </div>

            <section className="mt-8 grid gap-4 xl:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <h3 className="text-sm font-medium">Payments</h3>
                <div className="mt-3 grid grid-cols-[100px_1fr] gap-3">
                  <div className="relative h-24 w-24 rounded-full" style={{ background: paymentGradient }}>
                    <div className="absolute inset-4 rounded-full bg-[#0b1022]" />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                      $45k
                    </div>
                  </div>
                  <div className="space-y-1">
                    {dashboardData.paymentStatuses.map((item) => (
                      <div key={item.label} className="flex justify-between text-[11px]">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <h3 className="text-sm font-medium">Top Clients</h3>
                <div className="mt-2 space-y-2 text-[11px]">
                  {dashboardData.topClients.map((c) => (
                    <div key={c.name} className="flex justify-between">
                      <span>{c.name}</span>
                      <span>{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

        </section>
      </div>
    </main>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className={`h-2 w-2 rounded ${color}`} />
      <span>{label}</span>
    </div>
  );
}

function buildConicGradient(items: { value: number }[]) {
  const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
  let current = 0;

  return `conic-gradient(${items
    .map((item, index) => {
      const start = current;
      const end = current + (item.value / total) * 100;
      current = end;
      return `${PAYMENT_SEGMENT_COLORS[index % PAYMENT_SEGMENT_COLORS.length]} ${start}% ${end}%`;
    })
    .join(', ')})`;
}
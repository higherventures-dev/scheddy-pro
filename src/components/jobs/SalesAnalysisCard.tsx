import { ChevronDown, Info, TrendingDown } from "lucide-react";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const points = [
  { x: 0, y: 260 },
  { x: 70, y: 245 },
  { x: 140, y: 180 },
  { x: 210, y: 190 },
  { x: 280, y: 200 },
  { x: 350, y: 150 },
  { x: 420, y: 150 },
  { x: 490, y: 95 },
  { x: 560, y: 96 },
  { x: 630, y: 82 },
  { x: 700, y: 67 },
  { x: 770, y: 50 },
];

function buildLinePath() {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
}

function buildAreaPath() {
  const line = buildLinePath();
  const last = points[points.length - 1];
  const first = points[0];
  return `${line} L ${last.x} 300 L ${first.x} 300 Z`;
}

export function SalesAnalysisCard() {
  const activePoint = points[8];

  return (
    <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
            <span>Sales Analysis</span>
            <Info className="h-4 w-4 text-slate-500" />
          </div>

          <div className="flex items-center gap-3">
            <div className="text-5xl font-semibold tracking-tight text-white">
              $44,452
            </div>

            <div className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-1 text-sm text-rose-400">
              <TrendingDown className="h-4 w-4" />
              -12.2%
            </div>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 shadow">
          Last 1 Year
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
        <svg viewBox="0 0 820 330" className="h-[280px] w-full">
          {[0, 1, 2, 3, 4, 5].map((row) => (
            <line
              key={`h-${row}`}
              x1="0"
              y1={row * 50}
              x2="820"
              y2={row * 50}
              stroke="rgba(148,163,184,0.12)"
            />
          ))}

          {months.map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 72 + 2}
              y1="0"
              x2={i * 72 + 2}
              y2="300"
              stroke="rgba(148,163,184,0.10)"
            />
          ))}

          <path
            d={buildAreaPath()}
            fill="rgba(249,115,22,0.14)"
          />

          <path
            d={buildLinePath()}
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx={activePoint.x}
            cy={activePoint.y}
            r="7"
            fill="#f97316"
            stroke="#fff"
            strokeWidth="3"
          />

          <g transform={`translate(${activePoint.x - 40}, ${activePoint.y - 42})`}>
            <rect
              x="0"
              y="-20"
              width="80"
              height="28"
              rx="8"
              fill="#1e293b"
              stroke="rgba(255,255,255,0.08)"
            />
            <text
              x="40"
              y="-2"
              textAnchor="middle"
              fontSize="12"
              fill="white"
              fontWeight="600"
            >
              $40000
            </text>
          </g>

          {["$0", "$5000", "$10000", "$20000", "$40000", "$80000"].map((label, i) => (
            <text
              key={label}
              x="4"
              y={304 - i * 50}
              fontSize="12"
              fill="#94a3b8"
            >
              {label}
            </text>
          ))}

          {months.map((month, i) => (
            <text
              key={month}
              x={i * 72 + 12}
              y="320"
              fontSize="12"
              fill={month === "Sep" ? "#f8fafc" : "#94a3b8"}
            >
              {month}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
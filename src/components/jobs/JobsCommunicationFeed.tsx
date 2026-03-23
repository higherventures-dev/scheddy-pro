import { ChevronRight, Info, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Job } from "@/lib/jobs/jobs-data";

interface Props {
  selectedJob: Job | null;
  message: string;
  setMessage: (v: string) => void;
  onSend: () => void;
}

const tasks = [
  {
    id: 1,
    title: "Electrical Services 14 Team Meeting",
    time: "09AM - 10AM",
    avatar: "🧔🏾",
    ring: "ring-emerald-500/60",
  },
  {
    id: 2,
    title: "Electrical Services 14 Team Meeting",
    time: "09AM - 10AM",
    avatar: "👩🏽",
    ring: "ring-orange-500/60",
  },
  {
    id: 3,
    title: "Electrical Services 14 Team Meeting",
    time: "09AM - 10AM",
    avatar: "👨🏻",
    ring: "ring-blue-500/60",
  },
  {
    id: 4,
    title: "Electrical Services 14 Team Meeting",
    time: "09AM - 10AM",
    avatar: "👩🏾",
    ring: "ring-amber-500/60",
  },
];

function TodaysTasksSidebar() {
  return (
    <div className="flex h-full flex-col bg-slate-900 p-4">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Today&apos;s Task
          </h3>
          <Info className="h-4 w-4 text-slate-500" />
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-3 py-2 text-sm font-medium text-orange-400">
          View All
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4"
          >
            <div className="mb-3 text-sm font-medium text-white">
              {task.title}
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 ring-2 ${task.ring}`}
              >
                {task.avatar}
              </div>
              <span>{task.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function JobsCommunicationFeed({
  selectedJob,
  message,
  setMessage,
  onSend,
}: Props) {
  if (!selectedJob) {
    return <TodaysTasksSidebar />;
  }

  return (
    <div className="flex h-full flex-col bg-slate-900">
      <div className="border-b border-slate-800 p-4">
        <div className="text-lg font-semibold">
          {selectedJob.city}, {selectedJob.state}
        </div>
        <div className="mt-1 text-sm text-slate-400">
          {selectedJob.status} • {selectedJob.type}
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {selectedJob.messages.map((m) => (
          <div
            key={m.id}
            className={`rounded-2xl p-3 text-sm ${
              m.author === "Vendor" ? "ml-10 bg-sky-600" : "mr-10 bg-slate-800"
            }`}
          >
            <div className="mb-1 text-xs opacity-70">
              {m.author} • {m.time}
            </div>
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-slate-800 p-3">
        <Input
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-slate-700 bg-slate-800 text-slate-100"
        />
        <Button onClick={onSend} className="bg-sky-600 hover:bg-sky-500">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
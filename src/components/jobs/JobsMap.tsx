import { Job } from "@/lib/jobs/jobs-data";

interface Props {
  jobs: Job[];
  selectedJob: Job | null;
  setSelectedJob: (job: Job) => void;
}

export function JobsMap({ jobs, setSelectedJob }: Props) {
  return (
    <div className="h-[340px] bg-slate-900 rounded-xl">

      <svg viewBox="0 0 900 640" className="w-full h-full">

        {jobs.map(job => (

          <g
            key={job.id}
            transform={`translate(${job.x},${job.y})`}
            onClick={() => setSelectedJob(job)}
            className="cursor-pointer"
          >

            <circle r="18" fill="#0f172a" />
            <circle r="8" fill="#38bdf8" />

          </g>

        ))}

      </svg>

    </div>
  );
}
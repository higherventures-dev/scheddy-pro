import { Job } from "@/lib/jobs/jobs-data";
import { currency } from "@/lib/jobs/jobs-utils";

interface Props {
  jobs: Job[];
  setSelectedJob: (job: Job) => void;
}

export function JobsTable({ jobs, setSelectedJob }: Props) {

  return (

    <table className="w-full">

      <thead>
        <tr>
          <th>City</th>
          <th>Status</th>
          <th>Revenue</th>
        </tr>
      </thead>

      <tbody>

        {jobs.map(job => (

          <tr
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="cursor-pointer"
          >

            <td>{job.city}</td>
            <td>{job.status}</td>
            <td>{currency(job.revenue)}</td>

          </tr>

        ))}

      </tbody>

    </table>

  );
}
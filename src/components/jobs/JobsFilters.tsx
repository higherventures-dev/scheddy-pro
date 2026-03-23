import { Button } from "@/components/ui/button";

interface Props {
  statuses: string[];
  statusFilter: string;
  setStatusFilter: (s: string) => void;
}

export function JobsFilters({
  statuses,
  statusFilter,
  setStatusFilter
}: Props) {

  return (
    <div className="flex gap-2">

      {statuses.map(status => (

        <Button
          key={status}
          variant={status === statusFilter ? "default" : "outline"}
          onClick={() => setStatusFilter(status)}
        >
          {status}
        </Button>

      ))}

    </div>
  );
}
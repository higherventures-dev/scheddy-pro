import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  search: string;
  setSearch: (v: string) => void;
}

export function JobsHeader({ search, setSearch }: Props) {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-semibold">Jobs</h1>
        <p className="text-sm text-slate-400">
          Manage vendor jobs and opportunities
        </p>
      </div>

      <div className="relative w-72">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search jobs"
          className="pl-9"
        />
      </div>

    </div>
  );
}
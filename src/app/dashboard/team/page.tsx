"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Phone, Search, UserRound } from "lucide-react";

type TeamMemberType = "Employee" | "Contractor";

type TeamMember = {
  id: string;
  name: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  type: TeamMemberType;
  role: string;
  department: string;
  bio: string;
  avatar: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "TM-001",
    name: "Maya Chen",
    city: "Phoenix",
    state: "AZ",
    phone: "(602) 555-1204",
    email: "maya.chen@taskio.com",
    type: "Employee",
    role: "Operations Manager",
    department: "Operations",
    bio: "Leads regional dispatch coordination and vendor scheduling across Arizona and Nevada.",
    avatar: "👩🏻",
  },
  {
    id: "TM-002",
    name: "Andre Lewis",
    city: "Las Vegas",
    state: "NV",
    phone: "(702) 555-2140",
    email: "andre.lewis@taskio.com",
    type: "Contractor",
    role: "Field Supervisor",
    department: "Roofing",
    bio: "Oversees field execution for roofing crews and manages inspection readiness.",
    avatar: "🧔🏾",
  },
  {
    id: "TM-003",
    name: "Sofia Martinez",
    city: "Salt Lake City",
    state: "UT",
    phone: "(801) 555-6612",
    email: "sofia.martinez@taskio.com",
    type: "Employee",
    role: "Electrical Lead",
    department: "Electrical",
    bio: "Coordinates electrical upgrades, inspections, and city approvals for active jobs.",
    avatar: "👩🏽",
  },
  {
    id: "TM-004",
    name: "Leo Grant",
    city: "San Diego",
    state: "CA",
    phone: "(619) 555-1142",
    email: "leo.grant@taskio.com",
    type: "Contractor",
    role: "Plumbing Specialist",
    department: "Plumbing",
    bio: "Handles repair diagnostics, field estimates, and plumbing execution for west region jobs.",
    avatar: "👨🏻",
  },
  {
    id: "TM-005",
    name: "Nina Patel",
    city: "Albuquerque",
    state: "NM",
    phone: "(505) 555-0874",
    email: "nina.patel@taskio.com",
    type: "Employee",
    role: "Solar Project Coordinator",
    department: "Solar",
    bio: "Manages solar install timelines, permit packages, and production tracking.",
    avatar: "👩🏾",
  },
  {
    id: "TM-006",
    name: "Victor Ross",
    city: "Tucson",
    state: "AZ",
    phone: "(520) 555-9821",
    email: "victor.ross@taskio.com",
    type: "Contractor",
    role: "Permit Consultant",
    department: "Admin",
    bio: "Supports permit turnaround, documentation updates, and municipal compliance workflows.",
    avatar: "🧑🏽",
  },
  {
    id: "TM-007",
    name: "Clara Evans",
    city: "Reno",
    state: "NV",
    phone: "(775) 555-3388",
    email: "clara.evans@taskio.com",
    type: "Employee",
    role: "Customer Success Lead",
    department: "Support",
    bio: "Owns customer communication, project updates, and issue resolution on active jobs.",
    avatar: "👩🏼",
  },
  {
    id: "TM-008",
    name: "Marcus Hill",
    city: "Denver",
    state: "CO",
    phone: "(303) 555-4122",
    email: "marcus.hill@taskio.com",
    type: "Contractor",
    role: "Inspector Liaison",
    department: "Compliance",
    bio: "Coordinates final inspections, closeout packages, and completion approval workflows.",
    avatar: "👨🏿",
  },
];

function typePill(type: TeamMemberType) {
  return type === "Employee"
    ? "bg-sky-500/15 text-sky-300 border-sky-500/20"
    : "bg-orange-500/15 text-orange-300 border-orange-500/20";
}

export default function TeamPage() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(TEAM_MEMBERS[0]?.id ?? "");

  const filteredMembers = useMemo(() => {
    const term = search.toLowerCase();

    return TEAM_MEMBERS.filter((member) =>
      `${member.name} ${member.city} ${member.state} ${member.email} ${member.type} ${member.role} ${member.department}`
        .toLowerCase()
        .includes(term)
    );
  }, [search]);

  const selectedMember =
    filteredMembers.find((member) => member.id === selectedId) ??
    filteredMembers[0] ??
    null;

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
            <p className="mt-1 text-sm text-slate-400">
              View employees and contractors across your organization.
            </p>
          </div>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search team members"
              className="h-11 w-[280px] rounded-2xl border border-slate-800 bg-slate-900 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-slate-700"
            />
          </div>
        </div>

        {/* UPDATED WIDTH RATIO HERE */}
        <div className="grid gap-6 xl:grid-cols-[65%_35%]">

          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
            <div className="grid grid-cols-[72px_1.4fr_1fr_1.1fr_1.3fr_120px] gap-3 border-b border-slate-800 px-5 py-4 text-xs uppercase tracking-wide text-slate-400">
              <div>Photo</div>
              <div>Name</div>
              <div>City / State</div>
              <div>Phone</div>
              <div>Email</div>
              <div>Type</div>
            </div>

            <div className="max-h-[760px] overflow-y-auto divide-y divide-slate-800">
              {filteredMembers.map((member) => {
                const isSelected = selectedMember?.id === member.id;

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setSelectedId(member.id)}
                    className={`grid w-full grid-cols-[72px_1.4fr_1fr_1.1fr_1.3fr_120px] gap-3 px-5 py-4 text-left transition ${
                      isSelected ? "bg-slate-800/70" : "hover:bg-slate-800/40"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl">
                        {member.avatar}
                      </div>
                    </div>

                    <div>
                      <div className="font-medium text-white">{member.name}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {member.role}
                      </div>
                    </div>

                    <div className="text-sm text-slate-300">
                      {member.city}, {member.state}
                    </div>

                    <div className="text-sm text-slate-400">{member.phone}</div>

                    <div className="truncate text-sm text-slate-400">
                      {member.email}
                    </div>

                    <div>
                      <span
                        className={`inline-flex rounded-xl border px-2.5 py-1 text-xs font-medium ${typePill(
                          member.type
                        )}`}
                      >
                        {member.type}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROFILE PANEL */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            {!selectedMember ? (
              <div className="flex h-full min-h-[500px] items-center justify-center text-slate-500">
                Select a team member to view details.
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
                  <div className="flex h-40 w-40 items-center justify-center rounded-3xl border border-slate-800 bg-slate-950 text-6xl shadow-inner">
                    {selectedMember.avatar}
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-3xl font-semibold text-white">
                      {selectedMember.name}
                    </h2>

                    <div className="flex gap-3">
                      <span
                        className={`inline-flex rounded-xl border px-3 py-1.5 text-sm font-medium ${typePill(
                          selectedMember.type
                        )}`}
                      >
                        {selectedMember.type}
                      </span>

                      <span className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-sm text-slate-300">
                        {selectedMember.role}
                      </span>

                      <span className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-sm text-slate-300">
                        {selectedMember.department}
                      </span>
                    </div>

                    <p className="max-w-2xl text-sm text-slate-400">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                    <div className="mb-3 text-sm font-medium text-slate-300">
                      Contact Details
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-slate-500" />
                        {selectedMember.email}
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-slate-500" />
                        {selectedMember.phone}
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-slate-500" />
                        {selectedMember.city}, {selectedMember.state}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                    <div className="mb-3 text-sm font-medium text-slate-300">
                      Employment Details
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <UserRound className="h-4 w-4 text-slate-500" />
                        {selectedMember.type}
                      </div>

                      <div className="flex items-center gap-3">
                        <UserRound className="h-4 w-4 text-slate-500" />
                        {selectedMember.role}
                      </div>

                      <div className="flex items-center gap-3">
                        <UserRound className="h-4 w-4 text-slate-500" />
                        {selectedMember.department}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
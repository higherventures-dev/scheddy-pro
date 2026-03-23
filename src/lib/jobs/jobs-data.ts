export type JobStatus =
  | "New"
  | "Quote Submitted"
  | "Approved"
  | "In Progress"
  | "Completed";

export interface Message {
  id: string;
  author: "Dispatcher" | "Vendor";
  text: string;
  time: string;
}

export interface Job {
  id: number;
  city: string;
  state: string;
  x: number;
  y: number;
  revenue: number;
  status: JobStatus;
  type: string;
  messages: Message[];
}

export const statuses = [
  "All",
  "New",
  "Quote Submitted",
  "Approved",
  "In Progress",
  "Completed",
];

export const jobs: Job[] = [
  {
    id: 1,
    city: "Los Angeles",
    state: "CA",
    x: 180,
    y: 300,
    revenue: 22000,
    status: "New",
    type: "Roofing",
    messages: [
      {
        id: "1",
        author: "Dispatcher",
        text: "Can you review this job?",
        time: "9:12 AM"
      }
    ]
  }
];
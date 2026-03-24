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
  lat: number;
  lng: number;
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
    lat: 34.0522,
    lng: -118.2437,
    revenue: 22000,
    status: "New",
    type: "Roofing",
    messages: [
      {
        id: "1",
        author: "Dispatcher",
        text: "Can you review this job?",
        time: "9:12 AM",
      },
    ],
  },
  {
    id: 2,
    city: "Dallas",
    state: "TX",
    lat: 32.7767,
    lng: -96.797,
    revenue: 18000,
    status: "In Progress",
    type: "Electrical",
    messages: [],
  },
  {
    id: 3,
    city: "Phoenix",
    state: "AZ",
    lat: 33.4484,
    lng: -112.074,
    revenue: 15000,
    status: "Approved",
    type: "HVAC",
    messages: [],
  },
  {
    id: 4,
    city: "Denver",
    state: "CO",
    lat: 39.7392,
    lng: -104.9903,
    revenue: 12000,
    status: "Completed",
    type: "Inspection",
    messages: [],
  },
  {
    id: 5,
    city: "Seattle",
    state: "WA",
    lat: 47.6062,
    lng: -122.3321,
    revenue: 20000,
    status: "Quote Submitted",
    type: "Plumbing",
    messages: [],
  },
];
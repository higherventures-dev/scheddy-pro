// features/dashboard/services/getVendorDashboardData.ts
export type WorkloadDay = {
  day: string;
  completed: number;
  inProgress: number;
  upcoming: number;
  overdue: number;
};

export type SummaryCard = {
  label: string;
  value: string;
  subtext?: string;
};

export type WorkItem = {
  id: string;
  title: string;
  subtitle: string;
  dueLabel?: string;
  status?: 'overdue' | 'today' | 'upcoming';
  actionLabel?: string;
};

export type ScheduleItem = {
  id: string;
  time: string;
  customer: string;
  title: string;
  assignee?: string;
  badge?: string;
};

export type ActivityItem = {
  id: string;
  text: string;
  time: string;
  amount?: string;
};

export type PayoutItem = {
  id: string;
  client: string;
  amount: string;
  eta: string;
};

export type PaymentStatusItem = {
  label: string;
  value: number;
};

export type VendorDashboardData = {
  workloadMessage: string;
  workload: WorkloadDay[];
  summaryCards: SummaryCard[];
  workStatus: {
    completed: number;
    inProgress: number;
    upcoming: number;
    overdue: number;
  };
  workTodo: WorkItem[];
  schedule: ScheduleItem[];
  recentActivity: ActivityItem[];
  upcomingPayouts: PayoutItem[];
  paymentStatuses: PaymentStatusItem[];
  topClients: { name: string; amount: string }[];
};

export async function getVendorDashboardData(
  userId: string
): Promise<VendorDashboardData> {
  void userId;

  return {
    workloadMessage: "You're on track to finish 82% of scheduled work this week.",
    workload: [
      { day: 'Mon', completed: 1, inProgress: 0, upcoming: 0, overdue: 0 },
      { day: 'Tue', completed: 0, inProgress: 1, upcoming: 0, overdue: 0 },
      { day: 'Wed', completed: 0, inProgress: 1, upcoming: 1, overdue: 0 },
      { day: 'Thu', completed: 0, inProgress: 1, upcoming: 2, overdue: 0 },
      { day: 'Fri', completed: 2, inProgress: 2, upcoming: 1, overdue: 0 },
      { day: 'Sat', completed: 0, inProgress: 0, upcoming: 3, overdue: 1 },
      { day: 'Sun', completed: 0, inProgress: 0, upcoming: 0, overdue: 3 },
    ],
    summaryCards: [
      { label: 'Work to Do', value: '7 tasks', subtext: '+2 today' },
      { label: 'Appointments', value: '5 appointments', subtext: '+2 today' },
      { label: 'Money Available', value: '$7,950', subtext: '-$3,200' },
      { label: 'Pending Payouts', value: '$7,950', subtext: '$1,240 today' },
    ],
    workStatus: {
      completed: 8,
      inProgress: 5,
      upcoming: 6,
      overdue: 3,
    },
    workTodo: [
      {
        id: '1',
        title: 'Install fire pit at Greenfield LLC',
        subtitle: 'Due today · 2 days overdue',
        dueLabel: 'Today',
        status: 'overdue',
        actionLabel: 'Mark as Done',
      },
      {
        id: '2',
        title: 'Mata Enterprises Roof Repair',
        subtitle: 'Due today · 4 days overdue',
        dueLabel: 'Today',
        status: 'today',
        actionLabel: 'Mark as Done',
      },
      {
        id: '3',
        title: 'Yard cleanup for Oakridge HOA',
        subtitle: 'Today · 11:00 AM',
        dueLabel: '11:00 AM',
        status: 'today',
        actionLabel: 'Call',
      },
      {
        id: '4',
        title: 'Design meeting with BrightBuild',
        subtitle: 'Today · 2:30 PM',
        dueLabel: '2:30 PM',
        status: 'upcoming',
        actionLabel: 'Quick View',
      },
      {
        id: '5',
        title: 'New landscape design for Acme Co.',
        subtitle: 'Today · $525',
        dueLabel: '4:00 PM',
        status: 'upcoming',
        actionLabel: 'Start',
      },
    ],
    schedule: [
      {
        id: '1',
        time: '9:00 AM',
        customer: 'Bradstone Hills',
        title: 'Mulching and plant installation job',
        assignee: 'Richard',
      },
      {
        id: '2',
        time: '11:00 AM',
        customer: 'Greenfield LLC',
        title: 'Install fire pit',
        assignee: 'Laura',
        badge: '2 days · $1,400',
      },
      {
        id: '3',
        time: '2:30 PM',
        customer: 'BrightBuild',
        title: 'Landscape design meeting',
        assignee: 'Daniel',
      },
      {
        id: '4',
        time: '4:00 PM',
        customer: 'Acme Co.',
        title: 'New landscape design estimate',
        assignee: '',
      },
    ],
    recentActivity: [
      { id: '1', text: 'Reminder sent to Greenfield LLC', time: '9:30 AM' },
      { id: '2', text: 'Invoice #2109 paid by Brampton Library', time: '10:07 AM', amount: '$590' },
      { id: '3', text: 'Invoice #2115 sent to Northside Dental', time: '11:40 AM', amount: '$229' },
      { id: '4', text: 'Invoice #2102 viewed by BrightBuild', time: '2:30 PM' },
      { id: '5', text: 'Invoice #2116 sent to ABC Corp', time: '2:37 PM', amount: '$1,130' },
      { id: '6', text: 'Invoice #2109 paid by Acme Co.', time: '5:39 PM', amount: '$224' },
      { id: '7', text: 'Invoice #2108 viewed by Brampton Library', time: '5:29 PM', amount: '$238' },
    ],
    upcomingPayouts: [
      { id: '1', client: 'Brampton Library', amount: '$2,640', eta: 'within 1-2 days' },
      { id: '2', client: 'Northside Dental', amount: '$1,160', eta: 'within 2-3 days' },
      { id: '3', client: 'ABC Corp', amount: '$900', eta: 'within 3-4 days' },
      { id: '4', client: 'Meyers Construction', amount: '$3,260', eta: 'within 4-5 days' },
    ],
    paymentStatuses: [
      { label: 'Paid', value: 46 },
      { label: 'Viewed', value: 22 },
      { label: 'Pending', value: 18 },
      { label: 'Overdue', value: 9 },
      { label: 'Failed', value: 5 },
    ],
    topClients: [
      { name: 'Brampton Library', amount: '$2,640' },
      { name: 'Northside Dental', amount: '$1,130' },
      { name: 'ABC Corp', amount: '$800' },
      { name: 'Meyers Construction', amount: '$3,200' },
    ],
  };
}
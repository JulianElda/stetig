export enum work_stati {
  WORK = "WORK",
  BREAK = "BREAK",
}

export enum timer_stati {
  INITIATED = "INITIATED",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

type TIMER_CONFIGURATION = {
  title: string;
  time: number;
};

export const TIMER_CONFIGURATIONS: Record<work_stati, TIMER_CONFIGURATION> = {
  [work_stati.WORK]: {
    title: "Work",
    time: 1200000,
  },
  [work_stati.BREAK]: {
    title: "Break",
    time: 300000,
  },
};

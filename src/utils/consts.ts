export enum stati {
  WORK = "WORK",
  BREAK = "BREAK",
}

type TIMER_CONFIGURATION = {
  title: string;
  time: number;
};

export const TIMER_CONFIGURATIONS: Record<stati, TIMER_CONFIGURATION> = {
  [stati.WORK]: {
    title: "Work",
    time: 1200000,
  },
  [stati.BREAK]: {
    title: "Break",
    time: 300000,
  },
};

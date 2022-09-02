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

export enum temperatures {
  COLD = "COLD",
  COOLER = "COOLER",
  COOL = "COOL",
  WARM = "WARM",
  HOT = "HOT",
}

export const COLOR_TEMPERATURES: Record<temperatures, string> = {
  [temperatures.COLD]: "#0052A1",
  [temperatures.COOLER]: "#0068C8",
  [temperatures.COOL]: "#478acc",
  [temperatures.WARM]: "#ED6A07",
  [temperatures.HOT]: "#E65050",
};

export const COLOR_THRESHOLD: Record<temperatures, number> = {
  [temperatures.COLD]: 1,
  [temperatures.COOLER]: 0.9,
  [temperatures.COOL]: 0.4,
  [temperatures.WARM]: 0.1,
  [temperatures.HOT]: 0.05,
};

export const TIMER_STARTING_TEMPERATURE: Record<work_stati, temperatures> = {
  [work_stati.WORK]: temperatures.COLD,
  [work_stati.BREAK]: temperatures.HOT,
};

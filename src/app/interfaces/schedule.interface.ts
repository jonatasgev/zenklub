export interface ISchedule {
  pageIndex: number;
  totalPages: number;
  timezone: string;
  data: IScheduleItem[];
}

export interface IScheduleItem {
  day: string;
  schedules: string[];
}

export interface IScheduleDay {
  month: string;
  week: string;
}

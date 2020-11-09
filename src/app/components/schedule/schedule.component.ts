import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ISchedule, IScheduleDay, IScheduleItem } from 'src/app/interfaces';

@Component({
  selector: 'zen-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnChanges {
  @Input() data: ISchedule;
  @Input() loading = false;
  @Input() title = 'Calendário';
  @Input() subtitle: string;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  pageIndex: number = 0;
  totalPages: number = 0;

  days: IScheduleDay[];
  schedules: string[][];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      this.days = this.getDays(this.data.data);
      this.schedules = this.getSchedules(this.data.data);
      this.pageIndex = this.data.pageIndex;
      this.totalPages = this.data.totalPages;
      if (this.data.timezone) this.subtitle = `Timezone: ${this.data.timezone}`;
    }
  }

  getDays(data: IScheduleItem[]): IScheduleDay[] {
    return data.map((item: IScheduleItem) => {
      const date = new Date(item.day);
      const month = this.getNameMonth(date.getMonth());
      const day = date.getDate() + 1;
      const week = this.getNameDayOfWeek(date.getDay());

      return {
        week,
        month: `${month} ${day}`,
      };
    });
  }

  getNameMonth(month: number): string {
    return [
      'JAN',
      'FEV',
      'MAR',
      'ABR',
      'MAI',
      'JUN',
      'JUL',
      'AGO',
      'SET',
      'OUT',
      'NOV',
      'DEZ',
    ][month];
  }

  getNameDayOfWeek(day: number): string {
    return ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'][day];
  }

  getSchedules(data: IScheduleItem[]): string[][] {
    let all: string[] = [];

    const result: string[][] = data.map((item: IScheduleItem): string[] => {
      all = [...this.normalizeArray(item.schedules, all)];
      return item.schedules;
    });

    all.sort();

    result.forEach((item: string[], i: number): void => {
      if (item.length < all.length)
        result[i] = [...this.normalizeArray(all, item, '-')];
    });

    return result;
  }

  normalizeArray(
    arrBase: any[],
    arrToNormalize: any[],
    replaceWith: any = `~/false`
  ): any[] {
    let arr = [...arrToNormalize];

    arrBase.forEach((item: any, i: number) => {
      if (item !== undefined && !arr.includes(item)) {
        const value = replaceWith !== `~/false` ? replaceWith : item;
        arr = [...arr.slice(0, i), value, ...arr.slice(i)];
      }
    });

    return arr;
  }

  newArray<T>(size: number, content: T): T[] {
    return [...Array(size).keys()].map(() => content);
  }

  goToPage(page: number): void {
    this.changePage.emit(page);
  }
}

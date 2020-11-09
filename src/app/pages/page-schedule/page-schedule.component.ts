import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProfessionalInformation, ISchedule } from 'src/app/interfaces';
import { ProfessionalService } from 'src/app/services';

@Component({
  selector: 'zen-page-schedule',
  templateUrl: './page-schedule.component.html',
  styleUrls: ['./page-schedule.component.scss'],
})
export class PageScheduleComponent implements OnInit {
  loading = false;
  professionalData: IProfessionalInformation;
  scheduleData: ISchedule;
  userName: string;

  constructor(
    private route: ActivatedRoute,
    private service: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userName) {
        this.userName = params.userName;
        this.getProfessionalInformation(params.userName);
        this.getProfessionalSchedule(params.userName);
      }
    });
  }

  getProfessionalInformation(userName: string): void {
    this.service.information
      .read(userName)
      .subscribe((response: IProfessionalInformation) => {
        this.professionalData = response;
      });
  }

  getProfessionalSchedule(userName: string, page: number = 1): void {
    this.loading = true;
    this.service.schedule.read(userName, page).subscribe(
      (response: ISchedule) => {
        this.scheduleData = response;
        this.loading = false;
      },
      (error: Error) => {
        this.scheduleData = {
          ...this.scheduleData,
          pageIndex: page,
          data: [],
        };
        this.loading = false;
      }
    );
  }

  changeSchedulePage(page: number): void {
    this.getProfessionalSchedule(this.userName, page);
  }
}

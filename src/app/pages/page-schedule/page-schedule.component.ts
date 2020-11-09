import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProfessionalInformation } from 'src/app/interfaces';
import { ProfessionalService } from 'src/app/services';

@Component({
  selector: 'zen-page-schedule',
  templateUrl: './page-schedule.component.html',
  styleUrls: ['./page-schedule.component.scss'],
})
export class PageScheduleComponent implements OnInit {
  professionalData: IProfessionalInformation;
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
}

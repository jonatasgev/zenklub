import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProfessionalInformation } from 'src/app/interfaces';
import { ProfessionalService } from 'src/app/services';

@Component({
  selector: 'zen-professional-information',
  templateUrl: './professional-information.component.html',
  styleUrls: ['./professional-information.component.scss'],
})
export class ProfessionalInformationComponent implements OnInit {
  data: IProfessionalInformation;
  stars: string[];

  constructor(
    private route: ActivatedRoute,
    private service: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userName) this.getProfessionalInformation(params.userName);
    });
  }

  getProfessionalInformation(userName: string) {
    this.service.information
      .read(userName)
      .subscribe((response: IProfessionalInformation) => {
        this.data = response;
        this.stars = this.getStars(this.data.evaluation.stars);
      });
  }

  getStars(grade: number = 0, limit: number = 5): string[] {
    return [...Array(limit).keys()].map((i: number): string => {
      if (grade - i >= 1) return 'la-star';
      else if (grade - i > 0) return 'la-star-half';
    });
  }
}

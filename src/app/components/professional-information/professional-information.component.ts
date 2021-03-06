import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProfessionalInformation } from 'src/app/interfaces';

@Component({
  selector: 'zen-professional-information',
  templateUrl: './professional-information.component.html',
  styleUrls: ['./professional-information.component.scss'],
})
export class ProfessionalInformationComponent implements OnChanges {
  @Input() data: IProfessionalInformation;
  stars: string[];
  size: number;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe('(max-width: 767px)')
      .subscribe((response: BreakpointState) => {
        this.size = response.matches ? 100 : 180;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && this.data) {
      if (this.data.evaluation)
        this.stars = this.getStars(this.data.evaluation.stars);
    }
  }

  getStars(grade: number = 0, limit: number = 5): string[] {
    return [...Array(limit).keys()].map((i: number): string => {
      if (grade - i >= 1) return 'fas fa-star';
      else if (grade - i > 0) return 'fas fa-star-half-alt';
      else return 'far fa-star';
    });
  }
}

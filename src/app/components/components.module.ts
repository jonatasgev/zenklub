import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ProfessionalInformationComponent,
    ProgressBarComponent,
    ScheduleComponent,
  ],
  exports: [
    AvatarComponent,
    ProfessionalInformationComponent,
    ProgressBarComponent,
    ScheduleComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}

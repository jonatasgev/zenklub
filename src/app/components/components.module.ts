import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ProfessionalInformationComponent,
    ProgressBarComponent,
  ],
  exports: [
    AvatarComponent,
    ProfessionalInformationComponent,
    ProgressBarComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';

@NgModule({
  declarations: [AvatarComponent, ProfessionalInformationComponent],
  exports: [AvatarComponent, ProfessionalInformationComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}

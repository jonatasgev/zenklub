import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { PageScheduleComponent } from './page-schedule/page-schedule.component';

@NgModule({
  declarations: [PageScheduleComponent],
  imports: [BrowserModule, CommonModule, ComponentsModule],
})
export class PagesModule {}

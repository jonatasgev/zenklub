import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/shared/avatar/avatar.component';
import { PageScheduleComponent } from './pages/page-schedule/page-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    PageScheduleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

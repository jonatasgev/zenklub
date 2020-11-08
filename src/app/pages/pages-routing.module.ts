import { Routes } from '@angular/router';
import { PageScheduleComponent } from './page-schedule/page-schedule.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/schedule/user-name',
  },
  {
    path: 'schedule',
    children: [
      {
        path: ':userName',
        component: PageScheduleComponent,
      },
    ],
  },
];

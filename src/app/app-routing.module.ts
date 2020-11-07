import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageScheduleComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/schedule/user-name'
  },
  {
    path: 'schedule/user-name',
    component: PageScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

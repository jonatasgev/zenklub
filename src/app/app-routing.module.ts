import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Pages from './pages/pages-routing.module';

// Decidi mover as rotas para o pages-routing apenas por organização lógica.
const routes: Routes = [...Pages.routes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

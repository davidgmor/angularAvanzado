import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjxComponent } from './rxjx/rxjx.component';

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {title: 'Inicio'}},
      { path: 'progress', component: ProgressComponent, data: {title: 'Progreso'}},
      { path: 'graficas1', component: Graficas1Component, data: {title: 'Gráficas'}},
      { path: 'promises', component: PromisesComponent, data: {title: 'Promesas'}},
      { path: 'rxjs', component: RxjxComponent, data: {title: 'RXJS'}},
      { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Administración'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

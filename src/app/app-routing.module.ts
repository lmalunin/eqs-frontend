import { Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/components/shipments.component';
import { OfficesComponent } from './offices/components/offices.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shipments', pathMatch: 'full' },
  { path: 'shipments', component: ShipmentsComponent },
  { path: 'offices', component: OfficesComponent },
  { path: '**', component: NotFoundPageComponent }
];

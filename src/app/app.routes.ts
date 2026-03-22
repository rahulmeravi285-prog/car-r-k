import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarDetailsPageComponent } from './car-details-page/car-details-page.component';
import { CarModelsPageComponent } from './car-models-page/car-models-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home-page', component: HomePageComponent, data: { text: 'Home-Page' } },
  { path: 'car-details-page', component: CarDetailsPageComponent, data: { text: 'Car-Details-Page' } },
  { path: 'car-models-page', component: CarModelsPageComponent, data: { text: 'Car-Models-Page' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentBodyComponent } from './content-body/content-body.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ContentBodyComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

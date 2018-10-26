import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentBodyComponent } from './content-body/content-body.component';
import { LetterDetailComponent } from './letter-detail/letter-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ContentBodyComponent,
  },
  {
    path: 'terms/:letter',
    component: ContentBodyComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

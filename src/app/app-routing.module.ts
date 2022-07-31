import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv', loadChildren: () => import('./modules/cv/cv.module').then(m => m.CvModule) },
  { path: 'realisations', loadChildren: () => import('./modules/realisations/realisations.module').then(m => m.RealisationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealisationViewComponent } from './components/realisation-view/realisation-view.component';
import { RealisationsComponent } from './components/realisations/realisations.component';

const routes: Routes = [
  { path: '', component: RealisationsComponent },
  { path: 'view', component: RealisationViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealisationsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealisationsComponent } from './components/realisations/realisations.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { RealisationsRoutingModule } from './realisations-routing.module';
import { RealisationViewComponent } from './components/realisation-view/realisation-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
  declarations: [
    RealisationsComponent,
    RealisationViewComponent
  ],
  imports: [
    CommonModule, SharedModule,
    RealisationsRoutingModule,
    LoadingModule,
    MarkdownModule.forChild(),
  ],
  exports: [
  ]
})
export class RealisationsModule { }

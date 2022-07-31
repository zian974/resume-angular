import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperiencesService } from './experiences.service';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    ExperiencesComponent,
  ],
  imports: [
    CommonModule, SharedModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    ExperiencesComponent
  ],
  providers: [
    ExperiencesService
  ]
})
export class ExperiencesModule { }

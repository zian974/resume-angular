import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationsComponent } from './components/educations/educations.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    EducationsComponent
  ],
  imports: [
    CommonModule, SharedModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    EducationsComponent
  ]
})
export class EducationsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import { ExperiencesModule } from './experiences/experiences.module';
import { EducationsModule } from './educations/educations.module';
import { SkillsModule } from './skills/skills.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule, CvRoutingModule,
    LoadingModule,
    EducationsModule,
    ExperiencesModule,
    SkillsModule,
    ContactModule
  ],
  exports: [
  ]
})
export class CvModule { }

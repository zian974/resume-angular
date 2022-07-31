import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule, SharedModule,
    LoadingModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }

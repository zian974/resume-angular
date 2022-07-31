import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingHostDirective } from './loading-host/loading-host.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingHostDirective,
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingHostDirective,
    LoadingSpinnerComponent
  ]
})
export class LoadingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactTitleComponent } from './components/contact-title/contact-title.component';
import { ContactBottomComponent } from './components/contact-bottom/contact-bottom.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactItemComponent,
    ContactTitleComponent,
    ContactBottomComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContactComponent,
    ContactItemComponent,
    ContactTitleComponent,
    ContactBottomComponent
  ]
})
export class ContactModule { }

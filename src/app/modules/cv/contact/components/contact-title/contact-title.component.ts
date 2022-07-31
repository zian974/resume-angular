import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContactModel } from '../../contact.model';


interface ComponentData {
  contact: Partial<ContactModel>;
}

@Component({
  selector: 'strapi-contact-title',
  templateUrl: './contact-title.component.html',
  styles: [
    `
      /* :host {
        display: block;
      } */
    `
  ]
})

export class ContactTitleComponent implements OnInit, AfterViewInit {

  @Input() contact: Partial<ContactModel> = new ContactModel();
  @Input() target: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContactModel } from '../../contact.model';

interface ComponentData {
  contact: Partial<ContactModel>;
}

@Component({
  selector: 'strapi-contact-item',
  templateUrl: './contact-item.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Partial<ContactModel> = new ContactModel();

  constructor() { }

  ngOnInit(): void {
  }

}

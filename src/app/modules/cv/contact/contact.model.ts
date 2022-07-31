
let emptyContactAttrs = {
  nom: "",
  prenom: "",
  title: "",
  quote : "",
  adresse: "",
  cp: "",
  ville: "",
  tel: "",
  email: "",
  link: "",
}

interface ContactAttrs {
  nom: string;
  prenom: string;
  title: string;
  quote? : string
  adresse: string;
  cp: string;
  ville: string;
  tel: string;
  email: string;
  link?: string;
}

export interface Contact {
  id: number;
  attributes: ContactAttrs;
}

export class ContactModel {

  id!: number;

  attributes: ContactAttrs = emptyContactAttrs;

  constructor( data?: Partial<ContactModel> ) {
    Object.assign(this, data);
  }

}

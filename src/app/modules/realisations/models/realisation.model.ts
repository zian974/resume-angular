import { StrapiImage, StrapiMedia } from "src/app/shared/models/strapi/strapi-data-media.model";
import { StrapiEntity } from "../../../shared/models/strapi/strapi.model";

export class Realisation {

  title: string = "";
  intro: string = "";
  content: string = "";
  date_start: Date|null = null;
  date_end?: Date|null;
  link: string = "";
  tags: string = "";
  img: StrapiMedia<StrapiImage> = {
    data: {
      id: null,
      attributes: new StrapiImage
    }
  };

  constructor( data?: Partial<Realisation> ) {

    for(var attr in data ) {
      if ( this.hasOwnProperty(attr) ) {
        if ( attr === 'img' && (<any>data).img && (<any>data).img.data) {
          this.img = {
            data: {
              id: (<any>data).img.data.id,
              attributes: new StrapiImage((<any>data).img.data.attributes)
            }
          }
        }
        else {
          (<any>this)[attr] = (<any>data)[attr];
        }
      }
    }
  }

}

export class RealisationModel implements StrapiEntity<Realisation>{

  id: number|null = null;
  attributes: Realisation = new Realisation();
  constructor( data?: StrapiEntity<Realisation> ) {
    this.id = data?.id || null;
    this.attributes = new Realisation(data?.attributes);
  }

}

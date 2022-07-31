
class ImageFormat {
  ext: string = "";
  mime: string = "";
  name: string = "";
  url: string ="";
  constructor( data?: ImageFormat ) {
    for(var attr in data ) {
      if ( this.hasOwnProperty(attr) ) {
        (<any>this)[attr] = (<any>data)[attr];
      }
    }
  }
}

class ImageFormats{
  small: ImageFormat = new ImageFormat;
  thumbnail: ImageFormat = new ImageFormat;
  constructor( data?: ImageFormats ) {
    for(var attr in data ) {
      (<any>this)[attr] = new ImageFormat((<any>data)[attr]);
    }
  }
}

export class StrapiImage extends ImageFormat{
  alternativeText: string = "";
  caption: string = "";
  formats: ImageFormats = new ImageFormats
  constructor( data?: StrapiImage ) {
    super();
    for(var attr in data ) {
      if ( this.hasOwnProperty(attr) ) {
        if ( attr === 'formats' ) {
          (<any>this)[attr] = new ImageFormats((<any>data)[attr])
        }
        else {
          (<any>this)[attr] = (<any>data)[attr];
        }
      }
    }
  }
}

export interface StrapiMedia<T> {
  data: {
    id: number|null;
    attributes: T;
  }
}

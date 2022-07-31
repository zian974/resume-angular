export class ExperienceModel {

  id!: number;

  attributes!: {
    title: string;
    company: string;
    date_start: Date;
    date_end: Date;
    place: string;
    image: string;
    content: string
  };

  constructor( data?: Partial<ExperienceModel> ) {
    Object.assign(this, data);
  }

}

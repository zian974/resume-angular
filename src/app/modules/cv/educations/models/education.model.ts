export class EducationModel {

  id!: number;

  attributes!: {
    title: string;
    level: string;
    place: string;
    content: string
    date_start: Date;
    date_end: Date;
  };

  constructor( data?: Partial<EducationModel> ) {
    Object.assign(this, data);
  }

}

export class SkillModel {

  id!: number;

  attributes!: {
    category: string
    title: string
    value: number
  };

  constructor( data?: Partial<SkillModel> ) {
    Object.assign(this, data);
  }

}

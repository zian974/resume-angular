import { SkillModel } from "./skill.model";

export interface Skills {
  /** Liste des fiche de tris */
  data: SkillModel[];
}

export class SkillsModel implements Skills {

  /** Liste des fiches d'expérience' */
  data: SkillModel[] = [];

  /**
   * @constructor
   *
   * @param data Données d'initialisation
   */
  constructor( data?: Partial<SkillsModel> ) {
    Object.assign(this, data);
  }

}

export class SkillsGroupedModel {

  title!: string;

  /** Liste des fiches d'expérience' */
  data: { title: string; data: SkillModel[] }[] = [];

  /**
   * @constructor
   *
   * @param data Données d'initialisation
   */
  constructor( skills: SkillsModel ) {

    skills.data.forEach( (value: SkillModel, index: number ) => {
      let cat: string = value.attributes.category;
      let idx = this.data.findIndex( ( value, index: number ) => {
        if ( value.title === cat ) {
          return true;
        }
        return false;
      });

      if ( idx === -1 ) {
        idx = this.data.push( {
          title: cat,
          data: []
        }) - 1;
      }

      this.data[idx].data.push(value);

    });
  }

}


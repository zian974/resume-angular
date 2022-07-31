import { EducationModel } from "./education.model";

export interface Experiences {
  /** Liste des fiche de tris */
  data: EducationModel[];
}

export class EducationsModel implements Experiences {

  /** Liste des fiches d'expérience' */
  data: EducationModel[] = [];

  /**
   * @constructor
   *
   * @param data Données d'initialisation
   */
  constructor( data?: Partial<EducationsModel> ) {
    Object.assign(this, data);
  }

}


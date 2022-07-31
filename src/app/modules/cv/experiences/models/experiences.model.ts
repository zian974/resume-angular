// import { ListMetadata } from "src/app/shared/models/list-metadata.model";
import { ExperienceModel } from "./experience.model";

export interface Experiences {
  /** Liste des fiche de tris */
  data: ExperienceModel[];

  // meta: ListMetadata;
}

export class ExperiencesModel implements Experiences {

  /** Liste des fiches d'expérience' */
  data: ExperienceModel[] = [];

  // meta = new ListMetadata;

  /**
   * @constructor
   *
   * @param data Données d'initialisation
   */
  constructor( data?: Partial<ExperiencesModel> ) {
    Object.assign(this, data);
  }

}

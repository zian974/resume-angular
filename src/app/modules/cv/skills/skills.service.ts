import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Http } from 'src/app/shared/utils/Http';
import { toUrlParams } from 'src/app/shared/utils/toUrlParams';
import { environment } from 'src/environments/environment';
import { SkillsModel } from './models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService extends Http {
  constructor(
    private http: HttpClient
  ) {
    super();
  }

  /**
   * Récupération de la liste des expériences
   *
   * @returns Observable
   */
   index = (): Observable<SkillsModel> => {
    let params =  toUrlParams({ });
    return this.http.get<SkillsModel>( environment.apiUrl + '/skills?'+ params )
      .pipe(
        catchError( this.handleError() )
      );
  }
}

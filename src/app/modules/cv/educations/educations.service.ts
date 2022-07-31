import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Http } from 'src/app/shared/utils/Http';
import { toUrlParams } from 'src/app/shared/utils/toUrlParams';
import { environment } from 'src/environments/environment';
import { EducationsModel } from './models/educations.model';

@Injectable({
  providedIn: 'root'
})
export class EducationsService extends Http {
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
   index = (): Observable<EducationsModel> => {
    let params =  toUrlParams({ sort: 'date_end:DESC'});
    return this.http.get<EducationsModel>( environment.apiUrl + '/educations?'+ params )
      .pipe(
        catchError( this.handleError() )
      );
  }
}

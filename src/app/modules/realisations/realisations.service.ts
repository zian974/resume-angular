import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Http } from 'src/app/shared/utils/Http';
import { environment } from 'src/environments/environment';
import { Realisation } from './models/realisation.model';
import { StrapiResponse } from '../../shared/models/strapi/strapi.model';

@Injectable({
  providedIn: 'root'
})
export class RealisationsService extends Http {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  index = (): Observable<StrapiResponse<Realisation>> => {

    let action: string = '/realisations?';
    action += "populate[0]=img"

    return this.http.get<StrapiResponse<Realisation>>( environment.apiUrl + action )
      .pipe(
        catchError( this.handleError() )
      );
  }

  view = ( id: number): Observable<StrapiResponse<Realisation>> => {

    let action: string = '/realisations/'+ id;
    action += "?populate[0]=img"

    return this.http.get<StrapiResponse<Realisation>>( environment.apiUrl + action )
      .pipe(
        catchError( this.handleError() )
      );
  }

}

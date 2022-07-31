import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Http } from 'src/app/shared/utils/Http';
import { environment } from 'src/environments/environment';
import { ContactModel } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends Http {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  /**
   * Récupération des informations du contact
   *
   * @returns Observable
   */
  index = (): Observable<ContactModel> => {
    return this.http.get<ContactModel>( environment.apiUrl + '/contact' )
      .pipe(
        catchError( this.handleError() )
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfessionalInformation } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  private baseURL = 'api/professional';

  constructor(private http: HttpClient) {}

  public information = {
    read: (userName: string): Observable<IProfessionalInformation> => {
      return this.http.get<IProfessionalInformation>(
        `${this.baseURL}/${userName}.json`
      );
    },
  };
}

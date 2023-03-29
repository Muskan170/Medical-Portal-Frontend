import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Constant } from '../utilities/constant';

@Injectable({
  providedIn: 'root'
})
export class MedicalPortalService {

  constructor(private httpClient: HttpClient) { }

   //signup i.e register user
   signup(data: Object): Observable<Response> {
    return this.httpClient.post<Response>(Constant.signup, data)
  }
}

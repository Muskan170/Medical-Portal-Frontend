import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Constant } from '../utilities/constant';

@Injectable({
  providedIn: 'root'
})
export class MedicalPortalService {

  constructor(private httpClient: HttpClient) { }

   //signup i.e register user
  signup(data: Object): Observable<Response> {
    return this.httpClient.post<Response>(Constant.signup, data);
  }

  login(email: string, password: string){
    const body = {email: email, password: password}
    return this.httpClient.post(Constant.login, body)
  }

  getDoctors(){
    return this.httpClient.get<Response>(Constant.getdoctors);
  }
}

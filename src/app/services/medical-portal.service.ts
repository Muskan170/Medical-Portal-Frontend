import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../utilities/constant';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MedicalPortalService {
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  //signup i.e register user
  signup(data: Object): Observable<Response> {
    return this.httpClient.post<Response>(Constant.signup, data);
  }

  login(data: Object) {
    // const body = { email: email, password: password };
    return this.httpClient.post(Constant.login, data);
  }

  getDoctors() {
    return this.httpClient.get<Response>(Constant.getdoctors);
  }

  getDoctorById(id: any): Observable<any> {
    return this.httpClient.get<Response>(Constant.getDoctorById + id);
  }

  appointmentSchedule(
    fullName: string,
    doctorName: string,
    phone: string,
    emailAddress: string,
    appointmentDate: string,
    appointmentTime: string
  ) {
    const body = {
      fullName: fullName,
      doctorName: doctorName,
      phone: phone,
      emailAddress: emailAddress,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
    };
    return this.httpClient.post(Constant.appoint, body);
  }

  getAppointmentsForUser(email: string){
    return this.httpClient.get(Constant.getAppointmentForUser + email)
  }

  updatePassword(data: Object){
    return this.httpClient.put(Constant.updatePassword, data)
  }

  addDoctor(data: Object){
    return this.httpClient.post(Constant.addDoctor, data)
  }

  updateDoctor(data: Object){
    return this.httpClient.post(Constant.updateDoctor, data)
  }

  sharedNotification(display: string, Buttontext: string) {
    this.snackBar.open(display, Buttontext, {
      duration: 50000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}

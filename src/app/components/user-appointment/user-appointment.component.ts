import { Component } from '@angular/core';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.css']
})
export class UserAppointmentComponent {

  submitAppointment(){
    console.log('submit appointment');
    
  }
}

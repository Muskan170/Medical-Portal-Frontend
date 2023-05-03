import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  email: any
  bookings: any = []
  booking: any
  date: any
  constructor(private service: MedicalPortalService, private dateservice: DateService) {
    
  }
  
  ngOnInit(){
    this.email = localStorage.getItem('loginEmail')
    this.service.getAppointmentsForUser(this.email).subscribe((data) => {
      this.bookings = data
      this.booking = this.bookings.getappointment
      this.date =  {
        appointmentDate: this.dateservice.getDate(this.bookings.getappointment[0].appointmentDate)
      }
      console.log(this.booking);
      console.log(this.date);
      
    })
  }
}

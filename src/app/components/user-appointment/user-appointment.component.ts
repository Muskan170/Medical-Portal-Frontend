import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.css']
})
export class UserAppointmentComponent {

  form! : FormGroup;
  
  constructor(private fb: FormBuilder, private _service: MedicalPortalService) {
    this.form = this.fb.group({
      'fullName': ['', Validators.required],
      'doctorName': ['', Validators.required],
      'phone': ['', Validators.required],
      'emailAddress': ['', Validators.required],
      'appointmentDate': ['', Validators.required],
      'appointmentTime': ['' ,Validators.required]
    })
  }

  ngOnInit(){
    const dr = localStorage.getItem('doctor')
    this.form.controls['doctorName'].setValue(dr);
  }
  
  submitAppointment(event: any){
    event.preventDefault();
    const data = this.form.value;
    this._service.appointmentSchedule(data.fullName,data.doctorName, data.phone, data.emailAddress, data.appointmentDate, data.appointmentTime).subscribe((resp: any) => {
      if(resp){
        this._service.sharedNotification("Appointment Scheduled Successfully", "OK");
      }
      else{
        this._service.sharedNotification("Could not schedule", "OK")
      }
    })
    
  }
}

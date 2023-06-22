import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.css']
})
export class AdminAppointmentsComponent {
  
  getEmail: any = localStorage.getItem('loginEmail');
  appoints: any

  constructor(private _service: MedicalPortalService){}
  
  data = [
    {name: "Muskan Ranjan", time: "12 noon", date: "11-06-2023"},
  ]

  ngOnInit(){
    console.log(this.getEmail);
    if(this.getEmail === "test@gmail.com"){
      this.data = [{name: "No appointments", time: "-", date: "-"}]
    }
    else{
      this._service.getDoctors().subscribe((resp: any) => {
        console.log(resp);
        
        if(resp.doctors[1].email === 'sarah@gmail.com'){
          this._service.getAppointmentsForUser(this.getEmail).subscribe((resp: any) => {
            console.log(resp);
            this.appoints = resp.getappointment;
            console.log(this.appoints);
          }) 
        }
      })
    }
  }
  
  
}

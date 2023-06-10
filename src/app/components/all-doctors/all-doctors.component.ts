import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {

  constructor(private _service: MedicalPortalService, private route: Router){}

  doctors: any;

  ngOnInit(){
    this.getDoctors()
  }

  getDoctors(){
    this._service.getDoctors().subscribe((resp: any) => {
      this.doctors = resp.doctors;
      console.log(this.doctors);
      
    })
  }

  addDoctor(){
    this.route.navigate(['/form'])
  }
}

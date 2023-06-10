import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

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
  
  addDoctor(){

  }
}

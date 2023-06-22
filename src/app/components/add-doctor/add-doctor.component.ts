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
  data: any
  
  constructor(private fb: FormBuilder, private _service: MedicalPortalService) {
    this.form = this.fb.group({
      'nameOfDoctor': ['', Validators.required],
      'gender': ['', Validators.required],
      'age': ['', Validators.required],
      'clinicAddress': ['', Validators.required],
      'speciality': ['', Validators.required],
    })
  }
  
  createDoctor() {
    this.data = this.form.value;
    this._service.addDoctor(this.data).subscribe((res) => {
      console.log('added');
      
      this._service.sharedNotification('Doctor Added', 'OK')
    })
  }
}

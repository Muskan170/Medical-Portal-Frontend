import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';
import {Buffer} from 'buffer'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  
  form! : FormGroup;
  data: any

  constructor(private fb: FormBuilder, private _service: MedicalPortalService, private route: Router){
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'password1': ['', Validators.required],
      'password2': ['', Validators.required]
    })
  }

  reset(){
    this.data = this.form.value;
    console.log(this.data);
    if(this.data.password1 === this.data.password2){
      const data1 = {
        email: this.data.email,
        password: this.data.password1
      }
      // data1.password = Buffer.from(data1.password).toString('base64');
      this._service.updatePassword(data1).subscribe((resp) => {
        console.log("updated");
        
      })
    }
    
  }

  cancel(){
    this.route.navigate(['/login'])
  }
}

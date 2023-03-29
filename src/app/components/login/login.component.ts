import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form! : FormGroup;

  constructor(private fb: FormBuilder, private _service: MedicalPortalService) {
    this.form = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
  
  login(){
    const data = this.form.value;
    alert('login')
    console.log(data);
  }

  signup(){
    const data = this.form.value;
    this._service.signup(data).subscribe((resp) => {
      if(resp){
        console.log("signup successful");
      }
      else{
        console.log('error');
        
      }
    })
  }
}

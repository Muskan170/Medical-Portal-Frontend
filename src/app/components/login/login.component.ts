import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form! : FormGroup;

  constructor(private fb: FormBuilder, private _service: MedicalPortalService, private route: Router) {
    this.form = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
  
  login(){
    const data = this.form.value;
    this._service.login(data.email, data.password).subscribe((resp: any) => {
      console.log(resp);
      if(resp.success){
        if(resp.user.role == "admin"){
        this.route.navigate(['/admin-dashboard'])
        }
        else{
          this.route.navigate(['/user-dashboard'])
        }
      }
      else{
        alert('Invalid username or pwd')
      }
    })
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

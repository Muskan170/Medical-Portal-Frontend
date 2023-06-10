import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';
import {Buffer} from 'buffer'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form! : FormGroup;
  role: any = ['admin', 'User']

  constructor(private fb: FormBuilder, private _service: MedicalPortalService, private route: Router) {
    this.form = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'role': ['', [Validators.required]],
    })
  }
  
  login(){
    const data = this.form.value;
    if(data.email === '' || data.password === ''){
      this._service.sharedNotification("Kindly enter username & password to login","OK")
    }
    else{
      const data1 = {
        email: data.email,
        password: data.password
      }
      data1.password = Buffer.from(data1.password).toString('base64');
      localStorage.setItem('loginEmail', data.email)
      this._service.login(data1).subscribe((resp: any) => {
        if(resp.success){
          localStorage.setItem('token', resp.token);
          this._service.sharedNotification("Login successfull","OK")
          if(resp.user == "admin"){
          this.route.navigate(['/admin-dashboard/admin-home'])
          }
          else if(resp.user == 'User'){
            this.route.navigate(['/user-dashboard/user-home'])
          }
        }
        else{
          this._service.sharedNotification("Invalid Credentials","OK")
        }
      })
    }
  }

  signup(){
    const data = this.form.value;
    console.log(data);
    
    if(data.email === '' || data.password === ''){
      this._service.sharedNotification("Kindly enter username & password to register","OK")
    }
    else{
      this._service.signup(data).subscribe((resp) => {
        if(resp){
          this._service.sharedNotification("Signup successfull","OK")
        }
        else{
          this._service.sharedNotification("Could not signup","OK")
        }
      })
    }
    
  }

  changeRole(e: Event){

  }

  gotoForgotPage(){
    this.route.navigate(['/forgotPage'])
  }
}

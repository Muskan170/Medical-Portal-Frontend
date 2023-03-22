import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form! : FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log('hello');
  }
}

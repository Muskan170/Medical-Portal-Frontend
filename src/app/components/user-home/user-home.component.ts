import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  doctors = [
    {
      "name": "Dr. Atul Sharma",
      "age": 56,
      "gender": "Male",
      "specifications": ["Allergists", "Immunologists"],
      "keywords": ["asthma", "allergy", "food", "insect"],
      "email": "atul567@yahoo.com",
      "contact": "7653892923",
      "city": "Jamshedpur",
      "photo": "../../../assets/images/doctor1.jpg"
    },
    {
      "name": "Dr. Alizay",
      "age": 34,
      "gender": "Female",
      "specifications": ["Cardiologists"],
      "keywords": ["heart", "blood", "attack", "blood pressure"],
      "email": "alizay78@yahoo.com",
      "contact": "19253289101",
      "city": "Delhi",
      "photo": "../../../assets/images/doctor2.jpg"
    }
  ]
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent implements OnInit{

  constructor(private route: ActivatedRoute, private service: MedicalPortalService, private router: Router) {}

  specificDoctor: any

  ngOnInit() {
    this.route.params.subscribe((resp: any) => {
      this.service.getDoctorById(resp['id']).subscribe((data) => {
        this.specificDoctor = data.doctorById[0];
      })
    })
  }

  gotoAppointment(){
    localStorage.setItem('doctor',this.specificDoctor.nameOfDoctor)
    this.router.navigate(['/user-dashboard/appoint'])
  }
}

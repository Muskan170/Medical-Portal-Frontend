import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminAppointmentsComponent } from './components/admin-appointments/admin-appointments.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { KnowMoreComponent } from './components/know-more/know-more.component';
import { UserAppointmentComponent } from './components/user-appointment/user-appointment.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "admin-dashboard", component: AdminDashboardComponent, children: [
    {path: "admin-home", component: AdminHomeComponent},
    {path: "admin-profile", component: AdminProfileComponent},
    {path: "admin-appointments", component: AdminAppointmentsComponent}
  ]
},
  {path: "user-dashboard", component: UserDashboardComponent, children: [
    {path: "user-home", component: UserHomeComponent},
    {path: "user-appointments", component: BookAppointmentComponent},
    {path: "know-more/:id", component: KnowMoreComponent},
    {path: "appoint", component: UserAppointmentComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

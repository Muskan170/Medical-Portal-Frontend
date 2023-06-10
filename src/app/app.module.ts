import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminAppointmentsComponent } from './components/admin-appointments/admin-appointments.component';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { AgGridModule } from 'ag-grid-angular';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { KnowMoreComponent } from './components/know-more/know-more.component';
import { UserAppointmentComponent } from './components/user-appointment/user-appointment.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';
import { EmergencysosComponent } from './components/emergencysos/emergencysos.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    AdminAppointmentsComponent,
    UserDashboardComponent,
    UserHomeComponent,
    BookAppointmentComponent,
    KnowMoreComponent,
    UserAppointmentComponent,
    AllDoctorsComponent,
    EmergencysosComponent,
    AddDoctorComponent,
    ForgotComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    AgGridModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

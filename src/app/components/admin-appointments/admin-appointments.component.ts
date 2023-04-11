import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.css']
})
export class AdminAppointmentsComponent {
  
  columnDefs: ColDef[] = [
    { field: 'Name' },
    { field: 'Scheduled_Date' },
    { field: 'Scheduled_Time' },
    { field: 'Disease'},
    { field: 'Symptoms'}
];

rowData = [
    { Name: 'Aruna', Scheduled_Date: '24-04-2023', Scheduled_Time: '12pm', Disease: 'Heart Problem', Symptoms: 'Breatlessness' },
    { Name: 'Aruna', Scheduled_Date: '24-04-2023', Scheduled_Time: '12pm', Disease: 'Heart Problem', Symptoms: 'Breatlessness' },
    { Name: 'Aruna', Scheduled_Date: '24-04-2023', Scheduled_Time: '12pm', Disease: 'Heart Problem', Symptoms: 'Breatlessness' },
    { Name: 'Aruna', Scheduled_Date: '24-04-2023', Scheduled_Time: '12pm', Disease: 'Heart Problem', Symptoms: 'Breatlessness' },
    { Name: 'Aruna', Scheduled_Date: '24-04-2023', Scheduled_Time: '12pm', Disease: 'Heart Problem', Symptoms: 'Breatlessness' },
];

  
}

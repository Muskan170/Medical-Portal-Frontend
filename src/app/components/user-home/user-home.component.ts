import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalPortalService } from 'src/app/services/medical-portal.service';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  displayedColumns = ['id','name','gender','view']
  dataSource: any
  doctors: any = []

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private l = new BehaviorSubject([]);
  listSubObservable = this.l.asObservable();
  
  constructor(private service: MedicalPortalService, private router: Router) {}

  ngOnInit(): void {
    this.getDoctorsList()
  }

  getDoctorsList(){
    this.service.getDoctors().subscribe((resposne) => {
      this.doctors = resposne
      this.dataSource = new MatTableDataSource(this.doctors.doctors);
      this.l.next(this.dataSource);
    })
  }

  ngAfterViewInit() {
    this.listSubObservable.subscribe(listLoaded => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToKnowMore(){
    this.router.navigate(['/user-dashboard/know-more'])
  }
  
}

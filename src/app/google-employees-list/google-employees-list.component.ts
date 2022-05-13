import { Component, OnInit } from '@angular/core';
import { GoogleEmployeeService } from '../google-employee.service';

@Component({
  selector: 'app-google-employees-list',
  templateUrl: './google-employees-list.component.html',
  styleUrls: ['./google-employees-list.component.css']
})
export class GoogleEmployeesListComponent implements OnInit {
  googleemployeelist:any;
  constructor(private googleempservice:GoogleEmployeeService) { }

  ngOnInit(): void {
    this.googleempservice.getGoogleEmployees().subscribe((googledata)=>{
      this.googleemployeelist = googledata;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
@Component( {
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: [ './employee.component.css' ]
} )
export class EmployeeComponent implements OnInit {
  employee: any;
  eno: number = 0;
  constructor ( private employeeservice: EmployeeService, private route: ActivatedRoute ) { }

  ngOnInit (): void {
    this.route.params.subscribe( ( data ) => {
      this.eno = data[ 'empno' ];
      this.employee = this.employeeservice.getEmployeeByEmpno( this.eno );
    } );
  }

}

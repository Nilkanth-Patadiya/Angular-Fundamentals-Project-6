import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class GoogleEmployeeService {
  //myurl:string="http://localhost:5200/../assets/GoogleEmployeesList.json";
  myurl: string = "http://myangularproject-49e63.firebaseio.com/Employees.json";
  constructor ( private http: HttpClient ) { }

  getGoogleEmployees () {
    return this.http.get( this.myurl );
  }
}

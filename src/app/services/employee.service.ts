import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

url : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + 'api/Employee');
  }

  addEmployee(addEmployeeRequest: Employee):Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<Employee>(this.url + 'api/Employee',addEmployeeRequest);
  }

  getById(employeeId: any) : Observable<Employee>{
   return  this.http.get<Employee>(this.url + 'api/Employee/' + employeeId);
  }

  updateEmployee( updateEmployeeRequest: Employee):Observable<Employee>{
   return  this.http.put<Employee>(this.url + 'api/Employee' , updateEmployeeRequest);
  }
  
  deleteEmployee(id :any): Observable<Employee>{
    return this.http.delete<Employee> (this.url + 'api/Employee/'+ id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  appEmployeeRequest: Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private empServise:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.empServise.addEmployee(this.appEmployeeRequest)
    .subscribe({
      next:(response) => {
        this.router.navigate(['employee']);
      }
    });

  }

}

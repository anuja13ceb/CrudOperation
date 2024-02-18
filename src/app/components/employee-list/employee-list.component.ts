import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee'; //Employee Model
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
   this.getAll();
  }

  getAll() {
    this.empService.getAll()
      .subscribe({
        next: (response) => {
         this.employee=response;
          console.log(response);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}

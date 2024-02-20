import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  constructor(private empService : EmployeeService, private route: ActivatedRoute, 
    private router:Router) { } //ActivatedRoute service

  viewEmployeeRequest: Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

 

  ngOnInit(): void {
   this.getById(); //on page-load this will first load
  }

  getById(){
    this.route.paramMap.subscribe({ //paramMap : Rtriving single value (ID) from URL
      next: (response) => {
      const id = response.get('id'); //getting value of ID from URL with the help of ActivatedRoute service

      this.empService.getById(id) //After fetching Id from ActivatedRoute service we are passing the value of that Id 
      // and then we bind with Employee type 
      .subscribe({
        next: (response: any) => {
          this.viewEmployeeRequest= response;
          //console.log(response);
        }
      });
    }
    });
  }

  updateEmployee(){
    this.empService.updateEmployee(this.viewEmployeeRequest)
    .subscribe({
      next : (reponse) => {
        //this.viewEmployeeRequest=reponse;
        if(reponse){
          this.router.navigate(['employees']);
        }
      }
    })
  }

  deleteEmployee(id : any){
    this.empService.deleteEmployee(id)
    .subscribe({
      next : (Response) => {
        this.router.navigate(['employees'])
      }
    })
  }

}

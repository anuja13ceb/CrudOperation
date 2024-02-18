import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EmployeeDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

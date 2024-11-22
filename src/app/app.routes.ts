import { Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';

export const routes: Routes = [
  {
    path:'employee',
    component:EmployeeComponent,
    title:'awesome employee'
  },
  {path: '**', redirectTo: '/employee', pathMatch: 'full'},

];

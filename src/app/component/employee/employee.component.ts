import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../service/api-service.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  service = inject(ApiServiceService)// option 1
  // constructor(private _serve:ApiServiceService){

  // }
  isLoading:boolean =false;
  isUpdate:boolean = false;
  titleTraining : any ="training 101";
  entry: any = {};
  employee_list : any = [];
  ngOnInit(): void {
  //   this.service.get_employee().subscribe({next:(response:any)=>{
  //     this.employee_list = <any>response;
  //   },
  //   error:(error:any)=>{
  //     alert('error get employee')
  //   },
  // })
    this.refresh()
  }
  refresh(){
    this.service.get_employee().subscribe(response=>{
      this.employee_list = response;
    },error=>{
      alert('error get employee')
    })
  }
  update_employee(){
    this.isLoading = true;
    this.service.update_employee(this.entry).subscribe(request =>{
      // alert('Save changes')
      setTimeout(() => {
        this.isLoading = false;
        this.entry = {};
        this.isUpdate =false
      }, 2000);

    },error=>{
      this.isLoading = false;
      alert('error update')
    }
  )
  }
  save_employee(){
    this.isLoading = true;
    this.service.save_employee(this.entry).subscribe(request =>{
      setTimeout(() => {
        this.isLoading = false;
        this.entry = {};
        this.isUpdate =false
      }, 2000);
    },error=>{
      alert('error update')
      this.isLoading = false;
    }
  )
  }
  remove_employee(employee:any,index:any){
    employee.isloading = true;
    this.service.remove_employee(employee).subscribe(request =>{
      // alert('Save changes');

      setTimeout(() => {
        employee.isloading = false;
        this.employee_list.splice(index,1);

      }, 2000);
    },error=>{
      employee.isloading = false;
      alert('error update')
    }
  )
  }
}

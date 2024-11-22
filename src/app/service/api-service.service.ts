import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HRIS_api } from './connection';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  get_employee(){
    return this.http.get(HRIS_api+'/tRSPEmployees');
  }
  update_employee(employee:any){
    return this.http.put(HRIS_api+'/tRSPEmployees/'+ employee.eid,employee);
  }
  save_employee(employee:any){
    return this.http.post(HRIS_api+'/tRSPEmployees',employee);
  }
  remove_employee(employee:any){
    return this.http.delete(HRIS_api+'/tRSPEmployees/'+employee.recNo);
  }

}

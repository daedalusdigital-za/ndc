import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  listarray=[{"name":"welcome","mark":"75"}];

  GetData(){
    return this.listarray;
  }

  SaveData(input:any){
    this.listarray.push(input);
  }
}

import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:MasterService){
    sessionStorage.setItem("name1","welcomeking");

  }
@ViewChild(ChildComponent) viewdata !:ChildComponent
title = 'Parent Component';
inputname='';
inputmark='';
inputobj={"name":"","mark":""};
response:any;
TransferData(name:any,mark:any)
{

this.inputobj={"name":name,"mark":mark};
this.service.SaveData(this.inputobj);

//this.response= this.viewdata.updatelist(this.inputobj);
//this.inputname=name;
//this.inputmark=mark

}
 
 updateTitle(title:any){
this.title=title;
 }

}
 
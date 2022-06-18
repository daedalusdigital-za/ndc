import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild(ChildComponent) viewdata !:ChildComponent
title = 'Parent Component';
inputname='';
inputmark='';
inputobj={"name":"","mark":""};
response:any;
TransferData(name:any,mark:any)
{
this.inputname=name;
this.inputmark=mark
this.inputobj={"name":name,"mark":mark};
this.response= this.viewdata.updatelist(this.inputobj);
}
 
 updateTitle(title:any){
this.title=title;
 }

}
 
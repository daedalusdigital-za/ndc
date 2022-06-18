import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() namedata:any;
  @Input() markdata:any;
  @Input() objdata:any;

  @Output() dataupdateevent = new EventEmitter<string>();

  listarray=[{"name":"welcome","mark":"75"}]

  constructor() { }
   updatelist(obj:any){
    this.listarray.push(obj);
    return obj.name + " is added";
   }
  ngOnInit(): void {
  }
 
}

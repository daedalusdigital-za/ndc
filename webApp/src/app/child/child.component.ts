import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() namedata:any;
  @Input() markdata:any;
  @Input() objdata:any;

  listarray=[{"name":"welcome","mark":"75"}]

  constructor() { }
   updatelist(obj:any){
    this.listarray.push(obj);
   }
  ngOnInit(): void {
  }

}

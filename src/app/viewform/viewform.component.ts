import { Component, OnInit, Input, Output } from '@angular/core';
import { Cafedra } from '../myform/Class/cafedra';
import { UpdateformComponent } from '../updateform/updateform.component';


@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {

  
  show_update: boolean =false;
  cafedras: Cafedra[]=[];

  constructor() { }

  ngOnInit() {}

  addCafedra(event: any){
    if (event as Cafedra){
      let cafedra: Cafedra=event;
      this.cafedras.push(cafedra);
      console.log(this.cafedras);
    }

    else 
      throw new Error("Error of type");
  }

  update(){
    this.show_update=true;
  }

  showUp(event:any){
    if (typeof event === "boolean") {
      this.show_update = event;
    }
    else
      throw new Error("Error of type");
  }

  update_save(event: any, i:number)
{
  if (event as Cafedra){
    this.cafedras[i] = event;
  }
  else throw new Error("Error of type");
}
}
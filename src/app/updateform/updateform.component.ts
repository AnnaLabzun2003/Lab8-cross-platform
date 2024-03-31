import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cafedra } from '../myform/Class/cafedra';
import { ValidatorHeadNameService } from '../myform/Service/validator-head-name.service';
import { ValidatorNumbersService } from '../myform/Service/validator-numbers.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent  implements OnInit {

  @Input() cafedra!: Cafedra;
  @Input() show: boolean = true;
  @Output() cafedraChange: EventEmitter<Cafedra> = new EventEmitter<Cafedra>();
  @Output() showChange = new EventEmitter();


  constructor() { }

  validate_head(h: string): boolean {
    let validator = new ValidatorHeadNameService();
    if (h) {
      if (!validator.validate_headName(h)) 
        return false;
      else 
        return true;
    }
    return false; 
  }
  

  save(n: any, h: any, num: any, ad: any){
    this.show = false;
    if (this.validate_head(h)){
      let valid =new ValidatorNumbersService();
      if (h && !valid.validNumber_Teacher(num))
        throw Error("Number of teacher error")

    }
    else throw Error("Error of head name");
    this.cafedra=new Cafedra(n,h,num,ad,this.cafedra.teacher_list);
    this.cafedraChange.emit(this.cafedra);
    this.showChange.emit(this.show);
  }

  ngOnInit() {}

}
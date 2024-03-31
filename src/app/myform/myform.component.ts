import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Cafedra } from './Class/cafedra';
import { Validators } from '@angular/forms';
import { pipValidator } from './Service/pipValidator';
import { ValidatorNumbersService } from './Service/validator-numbers.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {

  cafedraForm!: FormGroup;
  cafedra!: Cafedra;

  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.cafedraForm = this.fb.group({
      cafedraName: ['', [Validators.required]],
      cafedraHead: ['', [pipValidator()]],
      cafedraNum_teachers: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cafedraAddress: ['', [Validators.required]],
      teacher_list: new FormArray([new FormControl()]),
    });
  }

  addTeacher() {
    console.log("Add");
    (this.cafedraForm.controls['teacher_list'] as FormArray).push(
      new FormControl()
    );
  }

  deleteTeacher(i: any) {
    console.log("Delete");
    (this.cafedraForm.controls['teacher_list'] as FormArray).removeAt(i);
  }

  getControls() {
    return (this.cafedraForm.get('teacher_list') as FormArray).controls;
  }

  onSubmit() {
    let name = this.cafedraForm.value.cafedraName;
    let head = this.cafedraForm.value.cafedraHead;
    let num = this.cafedraForm.value.cafedraNum_teachers;
    let address = this.cafedraForm.value.cafedraAddress;
    let teacher_list = this.cafedraForm.value.teacher_list;
    let valid = new ValidatorNumbersService();
    if (valid.validNumber_Teacher(num)){
      this.cafedra= new Cafedra(name, head, num, address, teacher_list);
      console.log("Submit");
      console.log(this.cafedra);}
    else
      this.presentAlert("Кількість викладачів перевищує допустимі значення (2-40)");
  }

  ngOnInit() { }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: "Помилка",
      subHeader: "",
      message: message, // помилка тут
      buttons: ['OK'],
    });

    await alert.present();
  }
}

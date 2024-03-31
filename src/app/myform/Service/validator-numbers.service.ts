import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorNumbersService {

  validNumber_Teacher(num: number): boolean {
    return num >= 2 && num <= 40;
  }

  constructor() { }
}

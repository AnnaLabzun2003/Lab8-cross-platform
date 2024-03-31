import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorHeadNameService {

  validate_headName(value: string): boolean {
    // Паттерн для перевірки правильності формату ПІП з крапкою після ініціалів
    const pattern = /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії]+ [А-ЩЬЮЯҐЄІЇ]\. [А-ЩЬЮЯҐЄІЇ]\.$/;
    
    // Перевірка, чи відповідає введене значення паттерну
    return pattern.test(value);
  }

  constructor() { }
}


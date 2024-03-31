import { TestBed } from '@angular/core/testing';

import { ValidatorNumbersService } from './validator-numbers.service';

describe('ValidatorNumbersService', () => {
  let service: ValidatorNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorNumbersService]
    });
    service = TestBed.inject(ValidatorNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for a valid number of teachers (between 2 and 40)', () => {
    const validNumbers = [2, 5, 10, 20, 30, 40];
    validNumbers.forEach(num => {
      expect(service.validNumber_Teacher(num)).toBe(true);
    });
  });

  it('should return false for an invalid number of teachers (less than 2)', () => {
    const invalidNumbers = [0, 1];
    invalidNumbers.forEach(num => {
      expect(service.validNumber_Teacher(num)).toBe(false);
    });
  });

  it('should return false for an invalid number of teachers (more than 40)', () => {
    const invalidNumbers = [41, 50, 100];
    invalidNumbers.forEach(num => {
      expect(service.validNumber_Teacher(num)).toBe(false);
    });
  });
});

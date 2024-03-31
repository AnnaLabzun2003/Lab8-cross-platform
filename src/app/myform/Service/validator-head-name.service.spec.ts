import { TestBed } from '@angular/core/testing';
import { ValidatorHeadNameService } from './validator-head-name.service';

describe('ValidatorHeadNameService', () => {
  let service: ValidatorHeadNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorHeadNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid head name format', () => {
    const validName = 'Лабзун А. М.';
    expect(service.validate_headName(validName)).toBe(true);
  });

  it('should return false for invalid head name format', () => {
    const invalidName = 'Прізвище';
    expect(service.validate_headName(invalidName)).toBe(false);
  });

  it('should return false for invalid head name format without initials', () => {
    const invalidNameWithoutInitials = 'Прізвище Ім\'я По батькові';
    expect(service.validate_headName(invalidNameWithoutInitials)).toBe(false);
  });
});

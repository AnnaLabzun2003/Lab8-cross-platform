import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorHeadNameService } from "./validator-head-name.service";

export function pipValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        const validator = new ValidatorHeadNameService();
        const valid = !control.value || validator.validate_headName(control.value);
        return valid ? null : { 'invalidPipFormat': true };
    };
}

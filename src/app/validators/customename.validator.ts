import { AbstractControl } from '@angular/forms';

export function validatorCustomerName(control: AbstractControl): {[key: string]: boolean} | null  {
    const alphaNumericRegex = /^[0-9a-zA-Z]+$/;
    if (control.value.match(alphaNumericRegex)) {
        return {customerName: true};
    }
    return null;
}


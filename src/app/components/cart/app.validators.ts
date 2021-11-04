import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export class AppCustomDirective extends Validators{

   static void fromDateValidator(fdValue: FormControl) {
    const date = fdValue.value;
    console.log('x');
    if (date ===null || date==='') return { requiredFromDate: true };
  
  }
}
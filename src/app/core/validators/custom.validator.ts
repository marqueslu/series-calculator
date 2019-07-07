import { FormControl } from '@angular/forms';

export class CustomValidator {
  static StartDateValidator(control: FormControl) {
    let today: Date = new Date();
    let inputValue: Date = control.value;
    today.setHours(0,0,0);    
    if (inputValue < today) {
      return {
        hasErrors: true
      };
    }
  }
}

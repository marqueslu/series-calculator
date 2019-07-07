import { FormControl } from '@angular/forms';

export class CustomValidator {
  static StartDateValidator(control: FormControl) {
    var today = new Date();
    var inputValue = new Date(control.value);
    if (inputValue.getDate() < today.getDate()) {
      return {
        hasErrors: true
      };
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import dateValidator from '../../utils/dateValidator';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
class NewCardComponent {
  newCardForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    discription: new FormControl('', [Validators.maxLength(13)]),
    imgUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/),
    ]),
    videoUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(
        // eslint-disable-next-line no-useless-escape
        /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/,
      ),
    ]),
    date: new FormControl('', [Validators.required, dateValidator]),
  });

  onSubmit() {
    if (this.newCardForm.valid) {
      alert('cool, data is valid');
      this.newCardForm.reset();
    }
  }
}

export default NewCardComponent;

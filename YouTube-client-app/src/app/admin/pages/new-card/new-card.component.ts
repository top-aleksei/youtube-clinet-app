import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createNewCard } from 'src/app/redux/actions/youtube.action';
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
    description: new FormControl('', [Validators.maxLength(13)]),
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

  constructor(private store: Store) {}

  onSubmit() {
    if (this.newCardForm.valid) {
      this.store.dispatch(
        createNewCard({ customItem: this.newCardForm.value }),
      );
      this.newCardForm.reset();
    }
  }
}

export default NewCardComponent;

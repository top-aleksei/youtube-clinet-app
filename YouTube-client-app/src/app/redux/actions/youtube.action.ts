import { createAction, props } from '@ngrx/store';
import { ICustomItem } from 'src/app/shared/models/custom-item.model';
import { ISearchItem } from 'src/app/shared/models/search-item.model';

// eslint-disable-next-line import/prefer-default-export
export const createNewCard = createAction(
  '[Youtube Page] Create',
  props<{ customItem: ICustomItem }>(),
);

export const fetchCards = createAction(
  '[Youtube Page] Fetch',
  props<{ apiItems: ISearchItem[] }>(),
);

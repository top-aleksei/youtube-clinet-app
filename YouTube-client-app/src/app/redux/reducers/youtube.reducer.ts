import { createReducer, on } from '@ngrx/store';

import { createNewCard, fetchCards } from '../actions/youtube.action';
import { IState } from '../state.model';

export const initialState: IState = {
  customCards: [],
  apiCards: [],
};

export const reducer = createReducer(
  initialState,
  on(
    createNewCard,
    (state, action): IState => ({
      ...state,
      customCards: [...state.customCards, action.customItem],
    }),
  ),
  on(
    fetchCards,
    (state, action): IState => ({
      ...state,
      apiCards: action.apiItems,
    }),
  ),
);

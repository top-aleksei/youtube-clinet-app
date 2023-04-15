import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '../state.model';

export const selectYoutubeState = createFeatureSelector<IState>('youtube');

export const selectApiCards = createSelector(
  selectYoutubeState,
  (state: IState) => state.apiCards,
);

export const selectCustomCards = (state: IState) => state.customCards;

export const selectAllCards = createSelector(
  selectApiCards,
  selectCustomCards,
  (apiCards, customCards) => [...apiCards, ...customCards],
);

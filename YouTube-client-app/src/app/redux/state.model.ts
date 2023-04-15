import { ICustomItem } from '../shared/models/custom-item.model';
import { ISearchItem } from '../shared/models/search-item.model';

export interface IState {
  customCards: ICustomItem[];
  apiCards: ISearchItem[];
}

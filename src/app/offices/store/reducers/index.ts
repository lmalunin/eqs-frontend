import { ActionReducerMap } from '@ngrx/store';

import * as fromOffices from './offices.reducer';

export interface OfficesState {
  officesState: fromOffices.OfficesState;
}

export const reducers: ActionReducerMap<OfficesState> = {
  officesState: fromOffices.reducer
};

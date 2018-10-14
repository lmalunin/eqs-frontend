import { ActionReducerMap } from '@ngrx/store';

import * as fromShipments from './shipments.reducer';

export interface ShipmentsState {
  shipmentsState: fromShipments.ShipmentsState;
}

export const reducers: ActionReducerMap<ShipmentsState> = {
  shipmentsState: fromShipments.reducer
};

import { Action, ActionReducerMap } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Shipment } from '../../models/Shipment';
import { ShipmentsActionTypes, ShipmentsActionsUnion } from '../actions/shipments.actions';

export interface ShipmentsState extends EntityState<Shipment> {
  selectedShipmentId: string | null;
  count: number;
}

export function sortById(a: Shipment, b: Shipment): number {
  return a.id.localeCompare(b.id);
}

export const adapter: EntityAdapter<Shipment> = createEntityAdapter<Shipment>({
  sortComparer: sortById,
});

export const initialState: ShipmentsState = adapter.getInitialState({
  selectedShipmentId: null,
  count: null
});

export function reducer(state = initialState, action: ShipmentsActionsUnion): ShipmentsState {
  switch (action.type) {

    case ShipmentsActionTypes.LoadShipments: {
      return state;
    }

    case ShipmentsActionTypes.LoadShipmentsSuccess: {
      return adapter.addAll(action.payload.shipments, { ...state, count: action.payload.count });
    }

    default:
      return state;
  }
}

export const getShipments = (state: ShipmentsState) =>  state['shipmentsState'].entities ;
export const getCount = (state: ShipmentsState) => state.entities.count;

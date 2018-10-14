import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getShipments, ShipmentsState } from '../reducers/shipments.reducer';


export const selectShipmentsState = createFeatureSelector<ShipmentsState>('shipments');

export const getShipmentsState = createSelector(
    selectShipmentsState,
    (state: ShipmentsState) =>  state
  );

export const getShipmentsEntities = createSelector(
  getShipmentsState,
  getShipments
);

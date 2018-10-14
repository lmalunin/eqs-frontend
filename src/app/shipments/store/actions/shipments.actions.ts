import { Action } from '@ngrx/store';
import { Shipment } from '../../models/Shipment';

export enum ShipmentsActionTypes {
  LoadShipments = '[Shipments] Load Shipments',
  LoadShipmentsSuccess = '[Shipments] Load Shipments Success',
  LoadShipmentsFailure = '[Shipments] Load Shipments Failure',
}

export class LoadShipments implements Action {
  readonly type = ShipmentsActionTypes.LoadShipments;
}

export class LoadShipmentsSuccess implements Action {
  readonly type = ShipmentsActionTypes.LoadShipmentsSuccess;

  constructor(public payload?: { shipments: Shipment[], count: number }) { }
}

export class LoadShipmentsFailure implements Action {
  readonly type = ShipmentsActionTypes.LoadShipmentsFailure;

  constructor(public payload?: any) { }
}

export type ShipmentsActionsUnion =
| LoadShipments
| LoadShipmentsSuccess
| LoadShipmentsFailure;

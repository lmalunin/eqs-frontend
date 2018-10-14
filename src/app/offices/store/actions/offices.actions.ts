import { Action } from '@ngrx/store';
import { Office } from '../../models/Office';

export enum OfficesActionTypes {
  LoadOffices = '[Offices] Load Offices'
}

export class LoadOffices implements Action {
  readonly type = OfficesActionTypes.LoadOffices;

  constructor(public payload?: { offices: Office[], count: number }) { }
}

export type OfficesActions = LoadOffices;

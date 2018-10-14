import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { Office } from '../../models/Office';

export interface OfficesState extends EntityState<Office> {
  selectedId: string | null;
  count: number;
}

export function sortById(a: Office, b: Office): number {
  return a.id.localeCompare(b.id);
}

export const adapter: EntityAdapter<Office> = createEntityAdapter<Office>({
  sortComparer: sortById,
});

export const initialState: OfficesState = adapter.getInitialState({
  // additional entity state properties
  selectedId: null,
  count: null
});

export function reducer(state = initialState, action: Action): OfficesState {
  switch (action.type) {
    default:
      return state;
  }
}

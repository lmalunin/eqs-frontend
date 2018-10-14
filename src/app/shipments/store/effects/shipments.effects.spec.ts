import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ShipmentsEffects } from './shipments.effects';

describe('ShipmentsEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: ShipmentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipmentsEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(ShipmentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

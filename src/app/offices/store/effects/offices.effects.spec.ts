import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OfficesEffects } from './offices.effects';

describe('OfficesEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: OfficesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficesEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(OfficesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

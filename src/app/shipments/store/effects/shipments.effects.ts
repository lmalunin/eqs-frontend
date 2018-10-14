import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShipmentsService } from '../../services/shipments.services';
import { Router, ActivatedRoute } from '@angular/router';
import { ShipmentsActionTypes, LoadShipments, LoadShipmentsSuccess, LoadShipmentsFailure } from '../actions/shipments.actions';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Shipment } from '../../models/Shipment';

@Injectable()
export class ShipmentsEffects {

  @Effect()
  loadShipments = this.actions$.pipe(
    ofType<LoadShipments>(ShipmentsActionTypes.LoadShipments),
    exhaustMap(() =>
      this.shipmentsService.loadShipments().pipe(
        map((shipments: Shipment[]) => {
          return new LoadShipmentsSuccess({ shipments, count: shipments.length });
        }),
        catchError(error => {
          return of(new LoadShipmentsFailure(error));
        })
      )
    )
  );

  constructor(private actions$: Actions,
    private shipmentsService: ShipmentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}
}

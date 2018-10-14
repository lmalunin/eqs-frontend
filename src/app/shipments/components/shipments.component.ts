import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShipmentsState } from '../store/reducers/shipments.reducer';
import { LoadShipments } from '../store/actions/shipments.actions';

import * as fromShipmentsSelectors from '../store/selectors/shipments.selectors';
import { Observable } from 'rxjs';
import { Shipment } from '../models/Shipment';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'type', 'origin', 'destination', 'delivered', 'weight', 'office'];
  dataSource = new MatTableDataSource<Shipment>();

  shipments$ = this.store.select(fromShipmentsSelectors.getShipmentsEntities)
    .pipe(
      map(data => this.dataSource.data = Object.values(data)),
      tap(console.log)
    ).subscribe();

  constructor(private store: Store<ShipmentsState>) {}

  ngOnInit() {
    if (!this.dataSource.data.length) {
    this.store.dispatch(new LoadShipments());
    }
  }

  ngOnDestroy(): void {
    this.shipments$.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getHeaders } from 'src/app/helpers/headers.service';
import { Shipment } from '../models/Shipment';
import { shareReplay, tap, map } from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl;

@Injectable()
export class ShipmentsService {
  constructor(private http: HttpClient) { }

  loadShipments(): Observable<any> {
  const headers = getHeaders();

    return this.http.get<Shipment>(BACKEND_URL + '/shipment/list', { headers }).pipe(
        shareReplay(),
        tap(data => console.log('service'))
      );
  }
}

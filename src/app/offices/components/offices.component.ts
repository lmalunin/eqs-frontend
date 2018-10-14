import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OfficesState } from '../store/reducers/offices.reducer';


@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  constructor(private store: Store<OfficesState>) {}

  ngOnInit() {}
}

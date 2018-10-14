import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainState } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<MainState>, private router: Router) {}

  title = 'eqs-frontend';

  selectedTabChange(event) {
    switch (event.index) {
      case 0: {
        this.router.navigate(['/shipments']);
        break;
      }
      case 1: {
        this.router.navigate(['/offices']);
        break;
      }
      default: {
        this.router.navigate(['/shipments']);
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../modules/auth/resources/auth';

import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { browserReload } from '../store/actions/auth.actions';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user) {

      this.store.dispatch(browserReload({ user: user }));
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../resources/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../resources/auth';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  user: User;

  onSubmit(f: NgForm) {
    this.store.dispatch(
      fromAuthActions.loginPage({
        email: f.value.email,
        password: f.value.password,
      })
    );
  }
}

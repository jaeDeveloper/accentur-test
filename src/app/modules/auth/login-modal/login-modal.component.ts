import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../resources/auth.service';
import { User } from '../resources/auth';
import { Observable } from 'rxjs';
import { ModalService } from '../resources/modal.service';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  constructor(
    public authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.store.dispatch(
      fromAuthActions.loginModal({
        email: f.value.email,
        password: f.value.password,
      })
    );
  }

  // cancel(): void {
  //   this.modalService.hide();
  // }
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectIsLoggedIn } from './auth.selectors';

/********************************************************************************* */
/****RETURN Header View Model */
/********************************************************************************* */

export interface HeaderViewModel {
  isLoggedin: boolean;
}

export const selectHeaderViewModel = createSelector(
  selectIsLoggedIn,
  (isLoggedIn: boolean): HeaderViewModel => {
    return {
      isLoggedin: isLoggedIn,
    };
  }
);

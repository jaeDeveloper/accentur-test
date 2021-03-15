import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    AccordionModule.forRoot(),
    RouterModule,
  ],
})
export class SharedModule {}

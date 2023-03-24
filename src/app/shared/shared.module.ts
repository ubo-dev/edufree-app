import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  exports: [
    InputComponent,
    AlertComponent
  ],
  providers: [provideNgxMask()]
})
export class SharedModule { }

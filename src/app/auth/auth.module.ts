import { RouterModule, Routes } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import LoginPageComponent from './pages/login-page/login-page.component';
import AuthRoutingModule from './auth-routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule, ReactiveFormsModule],
})
export default class AuthModule {}

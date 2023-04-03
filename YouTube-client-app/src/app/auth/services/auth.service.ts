import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import LocalStorageService from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  userName: string | null;

  constructor(private ls: LocalStorageService, private roter: Router) {
    this.userName = ls.getData('userName');
  }

  logIn(name: string) {
    this.ls.setData('userName', name);
    this.userName = name;
    console.log(this.userName);
  }

  logOut() {
    this.userName = null;
    this.ls.removeData('userName');
    this.roter.navigate(['/auth']);
  }
}

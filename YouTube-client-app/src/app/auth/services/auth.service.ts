import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import LocalStorageService from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  userName$ = new BehaviorSubject<string | null>(null);
  isLogged$ = this.userName$.pipe(map((el) => el !== null));

  constructor(private ls: LocalStorageService, private roter: Router) {
    this.userName$.next(ls.getData('userName'));
  }

  logIn(name: string) {
    this.ls.setData('userName', name);
    this.userName$.next(name);
  }

  logOut() {
    this.userName$.next(null);
    this.ls.removeData('userName');
    this.roter.navigate(['/auth']);
  }
}

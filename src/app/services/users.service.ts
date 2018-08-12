import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private user = new BehaviorSubject<string>('Lewis'); // New BS of type string, default value is 'Lewis'
  cast = this.user.asObservable();

  constructor() { }

  editUser (newUser) {
    this.user.next(newUser); // replaces the value of user with newUser
  }
}

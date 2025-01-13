import { Injectable } from '@angular/core';
import { User } from './models/database.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userSource: User = { id: 1, firstname: 'John', lastname: 'Doe', age: 42, password: 'password123' };

  constructor() { }

  getUser() {
    return this.userSource;
  }

  setUser(user: User) {
    console.log("set");
    this.userSource = user;
  }
}

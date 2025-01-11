import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { UserCardComponent } from '../user-card/user-card.component';

export const USER_LIST_TOKEN = new InjectionToken<User[]>('UserList');

@Component({
  selector: 'app-list',
  imports: [NavComponent, UserCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {
  constructor(
    @Inject(USER_LIST_TOKEN) public userlist: User[] // Inject User[] using the token
  ) {}
  ngOnInit(): void {
    this.userlist.push(new User("1","Bob","marley","10"))
  }
}

class User{
  public id: string;

  public lastname: string;

  public firstname: string;

  public age: string;

  constructor(
      id: string,
      lastname: string,
      firstname: string,
      age: string
  ) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
  }
}

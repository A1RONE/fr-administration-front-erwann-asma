import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { User } from '../models/database.models';
import { UserDataService } from '../user-data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-profile',
  imports: [
    NavComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user: User = { id: 1, firstname: 'John', lastname: 'Doe', age: 56, password: '' };

  constructor(
      private user_data: UserDataService,
      private http: HttpClient,
    ) {}

  ngOnInit(): void {
    this.user = this.user_data.getUser();
    this.user.password ="";
  }

  saveChanges(): void {
    let data = `firstname=${this.user.firstname}&lastname=${this.user.lastname}&age=${this.user.age}`;
    if (this.user.password.trim() !== '') {
      data += `&password=${this.user.password}`;
    }

    this.http.put(`http://localhost:3000/users/${this.user.id}`, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .subscribe();
  }
}

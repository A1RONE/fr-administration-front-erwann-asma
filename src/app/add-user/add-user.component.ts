import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { User } from '../models/database.models';
import { UserDataService } from '../user-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [
    NavComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user: User = { id: 0, firstname: '', lastname: '', age: 0, password: '' };

  constructor(
      private http: HttpClient,
      private router: Router,
    ) {}

  ngOnInit(): void {
  }

  saveChanges(): void {
    let data = `firstname=${this.user.firstname}&lastname=${this.user.lastname}&age=${this.user.age}&password=${this.user.password}`;

    this.http.post<User>(`http://localhost:3000/users`, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .subscribe((result: User) => this.router.navigateByUrl('/users/'+result.id));
  }
}

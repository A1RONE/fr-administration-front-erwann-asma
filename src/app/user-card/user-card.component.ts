import { Component, Input } from '@angular/core';
import { User } from '../models/database.models';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-card',
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() myData !: User

  constructor(
      private router: Router,
      private http: HttpClient,
    ) {}
  

  delete(id: number)
  {
    this.http.delete(`http://localhost:3000/users/`+id, {
    })
    .subscribe(result => console.log(result));  
    window.location.reload();
  }
}
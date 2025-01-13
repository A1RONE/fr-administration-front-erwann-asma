import { Component, Input } from '@angular/core';
import { Association } from '../models/database.models';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-association-card',
  imports: [RouterLink],
  templateUrl: './association-card.component.html',
  styleUrl: './association-card.component.css'
})
export class AssociationCardComponent {
  @Input() myData !: Association
  constructor(
      private http: HttpClient,
    ) {}
  delete(id: number)
  {
    this.http.delete(`http://localhost:3000/associations/`+id, {
    })
    .subscribe(result => console.log(result));  
    window.location.reload();
  }
}
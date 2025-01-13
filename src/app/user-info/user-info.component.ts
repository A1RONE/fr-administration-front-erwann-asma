import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RolePerAssoc, User } from '../models/database.models';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  imports: [
    NavComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit {

  user_id: number = 0;
  user: User = { id: 0, firstname: '', lastname: '', age: 0, password: '' };
  roles: RolePerAssoc[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  )
  {}

  ngOnInit(): void {
    this.route.url.subscribe(res => {
      this.user_id = +res[1]["path"];
      const request: Observable<any> = this.http.get('http://localhost:3000/users/'+this.user_id, {
        observe: 'response',
      });
      lastValueFrom(request).then(response => {
        this.user = response.body;
      }).catch(error => {
        console.error('Erreur lors de la requête :', error);
      });
      
      const request2: Observable<any> = this.http.get('http://localhost:3000/roles/associations/'+this.user_id, {
        observe: 'response',
      });
      lastValueFrom(request2).then(response => {
        console.log(response.body);
        this.roles = response.body;
      }).catch(error => {
        console.error('Erreur lors de la requête :', error);
      });    
    });
  }

}

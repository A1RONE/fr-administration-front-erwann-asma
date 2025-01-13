import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { AssociationCardComponent } from '../association-card/association-card.component';
import { Association, User } from '../models/database.models';

@Component({
  selector: 'app-list',
  imports: [NavComponent, UserCardComponent, AssociationCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  user_dataSource : User[] = [];
  association_dataSource : Association[] = [];
  routeUrl: string = '';
  constructor
  (
    private route: ActivatedRoute,
    private http: HttpClient,
  )
  {}
  ngOnInit(): void {
    this.route.url.subscribe(res => {
      this.routeUrl = res[1].path;
      console.log('Chemin :', res[1].path);
      if(res[1]["path"] === "users")
      {
        this.getUsers();
      }
      if(res[1]["path"] === "associations")
      {
        this.getAssociation();
      }      
    });
  }
  getAssociation() {
    const request: Observable<any> = this.http.get('http://localhost:3000/associations', {
      observe: 'response',
    });
    lastValueFrom(request).then(response => {
      this.association_dataSource = response.body;
      console.log('Données récupérées :', this.association_dataSource);
    }).catch(error => {
      console.error('Erreur lors de la requête :', error);
    });
  }
  getUsers() {
    const request: Observable<any> = this.http.get('http://localhost:3000/users', {
      observe: 'response',
    });
    lastValueFrom(request).then(response => {
      this.user_dataSource = response.body;
      console.log('Données récupérées :', this.user_dataSource);
    }).catch(error => {
      console.error('Erreur lors de la requête :', error);
    });
  }

}

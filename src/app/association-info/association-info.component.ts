import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Association, Minutes } from '../models/database.models';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-association-info',
  imports: [NavComponent, UserCardComponent],
  templateUrl: './association-info.component.html',
  styleUrl: './association-info.component.css'
})
export class AssociationInfoComponent {
  association_id: number = 0;
  association: Association = {id: 0,name: '',members: []};
  minutes: Minutes[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  )
  {}

  ngOnInit(): void {
    this.route.url.subscribe(res => {
      this.association_id = +res[1]["path"];
      console.log(this.association_id);
      const request: Observable<any> = this.http.get('http://localhost:3000/associations/'+this.association_id, {
        observe: 'response',
      });
      lastValueFrom(request).then(response => {
        console.log(response.body);
        this.association = response.body;
      }).catch(error => {
        console.error('Erreur lors de la requête :', error);
      });

      const request2: Observable<any> = this.http.get('http://localhost:3000/minutes/'+this.association_id+"/association", {
        observe: 'response',
      });
      lastValueFrom(request2).then(response2 => {
        this.minutes = response2.body;
      }).catch(error => {
        console.error('Erreur lors de la requête :', error);
      });
    });
  }

  toEdit()
  {
    this.router.navigateByUrl('/edit/'+this.association_id);
  };
  
}

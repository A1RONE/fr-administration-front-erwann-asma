import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Association, RoleAll, RolePerAssoc } from '../models/database.models';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-edit-association',
  imports: [
    NavComponent,
    FormsModule,
  ],
  templateUrl: './edit-association.component.html',
  styleUrl: './edit-association.component.css'
})
export class EditAssociationComponent {

  association: Association = {id:0,name:"",members:[]}
  roles: RolePerAssoc[] = []
  association_id: number = 0;
  user_id: number = 0;
  role_name: string = "";
  allroles: RoleAll[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  )
  {}

  ngOnInit(): void {
    this.route.url.subscribe(res => {
      this.association_id = +res[1]["path"];
      const request: Observable<any> = this.http.get('http://localhost:3000/associations/'+this.association_id, {
        observe: 'response',
      });
      lastValueFrom(request).then(response => {
        this.association = response.body;
        console.log(this.association.name)
      }).catch(error => {
        console.error('Erreur lors de la requête :', error);
      });

      const request2: Observable<any> = this.http.get('http://localhost:3000/roles/associations/all/'+this.association_id, {
        observe: 'response',
      });
      lastValueFrom(request2).then(response => {
        this.allroles = response.body;
        console.log(response.body)
      }).catch(error => {
        console.error('Erreur lors de la requête :', error);
      }); 
    });
  }

  addRole()
  {
    let data = `idUsers[]=${this.association.members.join('&idUsers[]=')}&idUsers[]=${this.user_id}&name=${this.association.name}`;

    this.http.put('http://localhost:3000/associations/'+this.association_id, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .subscribe()

    let data2 = `name=${this.role_name}&idUser=${this.user_id}&idAssociation=${this.association_id}`;
    
    this.http.post('http://localhost:3000/roles', data2, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .subscribe()  
    window.location.reload();
    
  };
  deleteRole(first_id: number,second_id: number)
  {
    this.http.delete('http://localhost:3000/roles/'+first_id+"/"+second_id,)
    .subscribe()    
    window.location.reload();
  };
  saveName()
  {
    let data = `idUsers[]=${this.association.members.join('&idUsers[]=')}&name=${this.association.name}`;

    // Envoi de la requête POST
    this.http.put('http://localhost:3000/associations/'+this.association_id, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .subscribe()    
    window.location.reload();
  };

}

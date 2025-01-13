import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data.service';
import { lastValueFrom, Observable } from 'rxjs';
import { AssocDTO } from '../models/database.models';

@Component({
  selector: 'app-add-association',
  imports: [
    NavComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-association.component.html',
  styleUrl: './add-association.component.css'
})
export class AddAssociationComponent {
  name: String = "";

  constructor(
      private http: HttpClient,
      private user: UserDataService,
      private router: Router,
    ) {}

  ngOnInit(): void {
  }

  saveChanges(): void {
    let data = `idUsers[]=${this.user.getUser().id}&name=${this.name}`;

    this.http.post<AssocDTO>(`http://localhost:3000/associations`, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .subscribe((result: AssocDTO) => {
      console.log(result);
      
      // Construction de la chaîne de données pour la deuxième requête
      let data2 = `name=president&idUser=${this.user.getUser().id}&idAssociation=${result.id}`;
      
      console.log(data2);
      
      // Deuxième requête POST pour créer un rôle
      this.http.post('http://localhost:3000/roles', data2, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .subscribe(result2 => {
        console.log(result2);
        this.router.navigateByUrl('/edit/'+result.id);
      });
      
    });
  }
  }

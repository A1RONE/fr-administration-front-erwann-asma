import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable, lastValueFrom  } from 'rxjs';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-users-list',
  imports: [MatTableModule, NavComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    const request: Observable<any> = this.http.get('http://localhost:3000/users', {
      observe: 'response',
    });
    lastValueFrom(request).then(response => this.dataSource = response.body );
  }

  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'age'];
  dataSource = [];
}




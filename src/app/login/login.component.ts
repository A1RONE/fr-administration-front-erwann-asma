import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private http: HttpClient,
    private user_data: UserDataService,
  ) {}
    

  login(): void {
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    this.api.post({ endpoint: '/auth/login', data: { username, password } })
    .then(response => {
      this.tokenStorageService.save(response.access_token); // Sauvegarde du token
  
      if (this.tokenStorageService.isLogged()) {
        const request: Observable<any> = this.http.get('http://localhost:3000/users/'+username, {
          observe: 'response',
        });
        lastValueFrom(request).then(response => {
          console.log(response.body)
          this.user_data.setUser(response.body);
          console.log(this.user_data.getUser());
          this.router.navigateByUrl('/home');
        }).catch(error => {
          console.error('Erreur lors de la requête :', error);
        });  
      } else {
        console.log(`${username}:${password} / incorrect`); // Message si non connecté
      }})
      
  }


}

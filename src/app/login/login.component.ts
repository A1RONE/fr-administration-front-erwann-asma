import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

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
  ) {}
    

  login(): void {
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    this.api.post({ endpoint: '/auth/login', data: { username, password } })
    .then(response => {
      this.tokenStorageService.save(response.access_token); // Sauvegarde du token
  
      if (this.tokenStorageService.isLogged()) {
        this.router.navigateByUrl('/users'); // Redirection si l'utilisateur est connecté
      } else {
        console.log(`${username}:${password} / incorrect`); // Message si non connecté
      }})
      
  }


}

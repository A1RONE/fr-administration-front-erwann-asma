import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor
  (
    private router: Router,
    private service: TokenStorageService,
  ){}

  logout(): void {
    console.log("click on logout !");
    this.service.clear();
    this.router.navigateByUrl("/login");
  }
}

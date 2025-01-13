import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-element',
  imports: [
    NavComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-element.component.html',
  styleUrl: './add-element.component.css'
})
export class AddElementComponent {
  constructor(
    private router: Router,
  ){}
  selectedType = "type";
  selectedId = 1;

  navigateToSelection(){
    if (this.selectedType === "association")
    {
      this.router.navigateByUrl('/add/association');
    }

    if (this.selectedType === "user")
      {
        this.router.navigateByUrl('/add/user');  
      }
  }
}

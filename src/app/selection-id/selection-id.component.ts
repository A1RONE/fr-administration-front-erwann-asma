import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-id',
  imports: [
    NavComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './selection-id.component.html',
  styleUrl: './selection-id.component.css'
})
export class SelectionIdComponent {
  constructor(
    private router: Router,
  ){}
  selectedType = "type";
  selectedId = 1;

  navigateToSelection(){
    if (this.selectedType === "association")
    {
      this.router.navigateByUrl('/associations/'+this.selectedId);
    }

    if (this.selectedType === "user")
      {
        this.router.navigateByUrl('/users/'+this.selectedId);  
      }
  }

}

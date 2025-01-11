import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fr-administration-front';
}

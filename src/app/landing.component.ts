import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'landing-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class AppComponent {
  title = 'starlightII';
}

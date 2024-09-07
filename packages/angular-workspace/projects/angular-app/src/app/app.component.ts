import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent, UiButton } from 'angular-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponent, UiButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}

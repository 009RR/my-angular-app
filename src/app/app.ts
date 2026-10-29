import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Profile} from './profile/profile';
import { Project } from './project/project';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Profile,Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
projects = [
    { id: 1, title: 'E-Commerce App', description: 'Angular & Spring Boot app', status: 'Completed' },
    { id: 2, title: 'Banking Portal', description: 'DBS project module', status: 'In Progress' }
  ];
}

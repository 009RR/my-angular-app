import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
 name: string = "Rajesh Sharadrao Raut";
role: string = "Software Developer";
location: string = "Pune, India";
linkedinUrl: string = "https://www.linkedin.com/in/rajesh-raut-7b72a230b/";
githubUrl: string = "https://https://github.com/009RR";

}

import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router'; // <-- Add this import

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [RouterLink, RouterLinkActive] // <-- Add them to your imports array
})
export class NavbarComponent { }
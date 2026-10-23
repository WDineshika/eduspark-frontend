
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Hero } from '../../shared/hero/hero';
import { FeatureBar } from '../../shared/feature-bar/feature-bar';
import { Subjects } from '../../shared/subjects/subjects';
import { WhyEduspark } from '../../shared/why-eduspark/why-eduspark';
import { Cta } from '../../shared/cta/cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Subjects,
    WhyEduspark,
    Cta,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

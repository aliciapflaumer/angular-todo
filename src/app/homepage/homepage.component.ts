import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  // variables
  title = 'Angular To do';
  pageTitle: string = "Homepage"
}

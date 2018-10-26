import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-letter-detail',
  templateUrl: './letter-detail.component.html',
  styleUrls: ['./letter-detail.component.css']
})
export class LetterDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  routeToLanding() {
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-terms-list',
  templateUrl: './terms-list.component.html',
  styleUrls: ['./terms-list.component.css']
})
export class TermsListComponent implements OnInit {
  selectedLetter: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.selectedLetter = urlParameters['letter'];
   });
  }
}

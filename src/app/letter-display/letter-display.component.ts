import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LETTERS } from '../models/letter.model';

@Component({
  selector: 'app-letter-display',
  templateUrl: './letter-display.component.html',
  styleUrls: ['./letter-display.component.css']
})
export class LetterDisplayComponent implements OnInit {
  letters: string[] = ["a", "b"];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  routeToTerms(clickedLetter) {
    console.log(clickedLetter)
    this.router.navigate(['terms', clickedLetter]);
  }
}

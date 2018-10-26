import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter-display',
  templateUrl: './letter-display.component.html',
  styleUrls: ['./letter-display.component.css']
})
export class LetterDisplayComponent implements OnInit {
  letters: string[] = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"]

  constructor(private router: Router) { }


  ngOnInit() {

  }

  routeToTerms(clickedLetter) {
    console.log(clickedLetter)
    this.router.navigate(['terms', clickedLetter]);
  }
}

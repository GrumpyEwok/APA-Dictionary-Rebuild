import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-display',
  templateUrl: './letter-display.component.html',
  styleUrls: ['./letter-display.component.css']
})
export class LetterDisplayComponent implements OnInit {
  public letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  constructor() { }

  ngOnInit() {
  }

}

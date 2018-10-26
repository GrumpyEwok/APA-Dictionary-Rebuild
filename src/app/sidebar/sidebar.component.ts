import { Component, OnInit } from '@angular/core';
import { Article } from './../models/articles.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public articles = [
    new Article("Abuse of women in European parliaments widespread"),
    new Article("The link between chronic pain and mental health"),
    new Article("Facebook posts may point to depression"),
    new Article("As U.S. suicide rates rise, Hispanics show relative immunity"),
    new Article("Social media may reduce depression risk for older people with pain"),
    new Article("Teens are being bullied ‘constantly’ on Instagram"),
    new Article("Noise: The other pollution hurting our health"),
    new Article("What does childhood anxiety look like?"),
    new Article("Lingering illnesses can trouble women for years after assault"),
    new Article("Young Americans say online bullying a serious problem"),
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  pageContent = {
  header : {
    title : 'RELAX',
    strapline : 'Find  places to relax and have fun!'
  },
    sidebar: '&nbsp;&nbsp;&nbsp;&nbsp;Sometimes there is no time to choose the best restaurant for dinner with a girl, sometimes just do not have friends who could use your experience to tell and to advise. But how much time decides and do not want to lose it, and spend in a pleasant environment and in an amazing place.\n\n &nbsp;&nbsp;&nbsp;&nbsp;<kbd>RELAX</kbd> will help you find what you are looking for, and having visited - leave your review about a particular institution to give a hint to other people!'
};
  ngOnInit() {
  }

}

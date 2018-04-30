import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pageContent = {
    header : {
      title : 'About Loc8r',
      strapline : ''
    },
    content : '&nbsp;&nbsp;&nbsp;&nbsp;The application <kbd>Relax</kbd> was created to help anyone have a good time, namely to give a hint where you can get the cherished feeling. Each of you can read the comments of other people about specific institutions, where they have already been and gave them their rating, which is also available to you on the page of detailed information about the institution. On the same page you will have access to detailed information about the institution, including opening hours and its location. You, in turn, visiting some interesting place, you can leave your feedback about it on our website to help other people in the future to make their choice. The app is currently in beta. In the future , improvements will be made to make your user experience of using it force you to return to its content.\n\n &nbsp;&nbsp;&nbsp;&nbsp;Everyone who wants to make good proposals for the development of the project, or who wants to provide practical assistance in its scaling and promotion - go through my contact information listed in the footer of the page. The application has no commercial orientation, and at the moment is an information source, a pocket Handbook for establishments in certain cities. The database is constantly updated and expanding geolocation applications. Therefore welcome and we will be glad to your return!'
};

}

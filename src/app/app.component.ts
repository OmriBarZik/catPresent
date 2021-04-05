import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'surprize!';
  url = 'https://cataas.com/cat';
  massage = 'לשימוש ברגעים קשים';

  constructor() { }

  ngOnInit() {
  }

  antherPicture() {
    this.url = 'https://cataas.com/cat?' + new Date().getTime();
  }

  antherCutePicture() {
    const text = 'love you!';
    this.url = 'https://cataas.com/cat/cute/says/' + text + '?' + new Date().getTime();
  }

  antherGif() {
    this.url = 'https://cataas.com/cat/gif?' + new Date().getTime();
  }
}



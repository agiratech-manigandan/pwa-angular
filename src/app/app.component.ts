import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  posts = [];
  constructor(private appService: AppService ) {}
  listPosts() {
    this.appService.getPosts().subscribe(breweries => {
      this.posts = breweries;
      console.log('posts', this.posts);
    });
  }

}

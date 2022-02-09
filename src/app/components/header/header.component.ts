import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalResult: number = 0;
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((response) => {
      this.totalResult = response.length;
    });
  }
}

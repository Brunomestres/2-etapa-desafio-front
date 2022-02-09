import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Post } from 'src/interfaces/post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css'],
})
export class ReadMoreComponent implements OnInit {
  post: Post = {
    body: "",
    createdAt: "",
    id: "",
    image: "",
    title: ""
  };
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.postService.getPost(id).subscribe(response => {
      this.post = response;
    });
  }
}

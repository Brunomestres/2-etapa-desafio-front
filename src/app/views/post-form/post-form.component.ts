import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/interfaces/post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post = {
    title: "",
    body: "",
    image: "",
    createdAt: ""
  }
  constructor( private router: Router, private postService: PostsService) { }

  ngOnInit(): void {
  }


  cancel(){
    this.router.navigate(['/']);
  }
  create(){
    this.post.createdAt = String(new Date().toISOString());
    this.postService.createPost(this.post).subscribe(res => {
      console.log(res)
      this.router.navigate(['/']);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  posts: Post[];

  constructor(private postService: PostService) {
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });

  }

  ngOnInit() {

    this.loadPosts();

  }
}

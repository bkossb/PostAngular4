import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadPost();
  }


  loadPost() {
    const id = +this.route.snapshot.params['id'];

    this.postService.getPost(id).subscribe((post) => {
      this.post = post;
    });

  }


}

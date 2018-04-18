import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[];

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  getId(): number {
    return this.route.snapshot.params['id'];
  }


  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.postService.getComments(this.getId()).subscribe((comment) => {
      this.comments = comment;
    });
  }

  createComment(input: HTMLInputElement) {
    let comment = {postId: this.getId(), name: 'name', email: 'example@example.com', body: input.value};
    this.postService.createComment(comment);
    this.comments.splice(0, 0, comment);
    input.value = '';
  }
}

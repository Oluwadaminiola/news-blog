import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog/blog.service';
import { POST } from 'src/app/models/http.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() article!: any;
  @Output() bookmarkedPost = new EventEmitter();
  @Output() removedPost = new EventEmitter();
  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {}

  bookmarkPost(post: POST) {
    this.bookmarkedPost.emit(post);
  }

  removePost(post: POST) {
    this.removedPost.emit(post);
  }

  openBlogPost(post: POST) {
    this.blogService.setBlog(post);
    this.router.navigate(['/' + post.title]);
  }
}

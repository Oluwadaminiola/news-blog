import { Component, OnInit } from '@angular/core';
import { POST } from 'src/app/models/http.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  selectedBlog!: POST;
  articles!: POST[];
  loadingBlogs: boolean = false;
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.getBlog();
    this.fetchBlogs();
  }

  getBlog() {
    this.selectedBlog = this.blogService.selectedBlogPost;
  }
  fetchBlogs() {
    this.loadingBlogs = true;
    this.blogService.getAllNewsPosts().subscribe((res) => {
      this.articles = res.articles.reverse();
      this.loadingBlogs = false;
    });
  }
}

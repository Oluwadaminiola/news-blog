import { Component, OnInit } from '@angular/core';
import { POST, RESPONSE } from '../models/http.model';
import { GeneralService } from '../shared/services/general.service';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles: POST[] = [];
  filteredArticles: POST[] = [];
  loading: boolean = false;
  selectedFilter: 'all' | 'bookmarked' = 'all';
  constructor(
    private blogService: BlogService,
    private generalService: GeneralService
  ) {}

  ngOnInit() {
    this.fetchPosts();
  }

  async fetchPosts() {
    this.loading = true;
    this.blogService.getAllNewsPosts().subscribe((res) => {
      this.articles = res.articles;
      this.articles.forEach((item) => {
        item['bookmark'] = false;
      });
      this.filteredArticles = this.articles;
      this.loading = false;
    });
  }

  bookMarkPost(bookmarkedPost: POST) {
    const selectedPost = bookmarkedPost;
    if (selectedPost.bookmark) {
      this.articles.forEach((item) => {
        if (item.title === selectedPost.title) {
          item.bookmark = false;
        }
      });
    } else {
      this.articles.forEach((item) => {
        if (item.title === selectedPost.title) {
          item.bookmark = true;
        }
      });
      this.generalService.showNotification({
        message: 'This post has been bookmarked!',
      });
    }
  }

  removePost(removedPost: POST) {
    const selectedPost = removedPost;
    this.articles = this.articles.filter(
      (item) => item.title !== selectedPost.title
    );
    this.filteredArticles = this.articles;
    this.generalService.showNotification({
      message: 'This post has been removed!',
    });
  }

  filterArticles(filter: 'all' | 'bookmarked') {
    switch (filter) {
      case 'all':
        this.selectedFilter = 'all';
        this.filteredArticles = this.articles;
        break;
      case 'bookmarked':
        this.selectedFilter = 'bookmarked';
        this.filteredArticles = this.articles.filter((item) => item.bookmark);
        break;
      default:
        break;
    }
  }
}

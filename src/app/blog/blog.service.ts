import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { POST, RESPONSE } from '../models/http.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiKey: string = environment.apiKey;
  selectedBlogPost!: POST;
  constructor(private http: HttpClient) {}

  getAllNewsPosts(): Observable<RESPONSE> {
    return this.http.get<RESPONSE>(
      `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=${this.apiKey}`
    );
  }

  setBlog(post: POST) {
    this.selectedBlogPost = post;
  }
}

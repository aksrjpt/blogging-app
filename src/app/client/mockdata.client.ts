import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogMockClient {
  private readonly dataURL = 'assets/mockData.json';

  constructor(private http: HttpClient) {}

  getAll$(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.dataURL);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public url = '';

  constructor(
    private HttpClient: HttpClient
  ) {
    this.url = `${environment.url}/posts`;
  }

  getData() {
    return this.HttpClient.get<any>(`${this.url}`);
  }

  postData(row: Post) {
    return this.HttpClient.post<any>(`${this.url}`, row);
  }
}

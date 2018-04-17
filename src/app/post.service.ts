import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Post} from './models/post';

@Injectable()
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: Http) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(`${this.apiUrl}/`)
      .map((res) => res.json());
  }

  getPost(id: number): Observable<Post> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .map((res) => res.json());
  }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get(`${this.apiUrl}/${id}/comments`)
      .map((res) => res.json());
  }

  createComment(value: string) {
    this.http.post(`${this.apiUrl}`, JSON.stringify(value))
      .subscribe(response => {
        value['id'] = response.json().id;
      });
  }


}

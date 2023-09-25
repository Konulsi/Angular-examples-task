import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    //http uzerinde ishlem edilecek deye httpclient i tanimlamaq lazimdir
  }

  getPosts() {
    return this.http.get(this.url).pipe(
      //observable nin icherisinde pipe methodunun icherisinde bir neche nethod ist ede bilirik
      retry(3), // meselen requesti 3 defe gonder olmadigi halda
      catchError(this.handleError) //erroru tut ve ekrana goster
    );
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(post) {
    return this.http
      .delete(this.url + '/' + post.id)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //gelen deyer true olsa client terefden gelen errordur
      console.log('client error: ' + error.error.message);
    } else {
      //eks halda backend den gelen errordur
      console.log(
        `backedn error: status code: ${error.status}' error: ${error.error}`
      );
    }
    return throwError('Bilinmeyen hata olushdu.');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor( private httpClient: HttpClient ) { }

  getPosts(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe();
  }

}

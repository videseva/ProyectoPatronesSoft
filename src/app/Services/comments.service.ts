import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { User } from '../Models/Users';
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private API_URL = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

   //otra forma de definir y captura el error
 getComments(): Observable <Comment[]>{
  return this.http.get<Comment[]>(this.API_URL).pipe(
    tap(_ => console.log('Datos Encontrado')),
    catchError(error =>{
      console.log("error al buscar")
      return of(error as Comment[])
    })
    );
}
getPostUser(idPost: number): Observable <Comment[]>{
  return this.http.get<Comment[]>(this.API_URL+ '?postId='+ idPost).pipe(
    tap(_ => console.log('Datos Encontrado')),
    catchError(error =>{
      console.log("error al buscar")
      return of(error as Comment[])
    })
    );
}
}

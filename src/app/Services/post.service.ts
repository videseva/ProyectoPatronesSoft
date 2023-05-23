import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { User } from '../Models/Users';
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

 //otra forma de definir y captura el error
 getPost(): Observable <Post[]>{
  return this.http.get<Post[]>(this.API_URL).pipe(
    tap(_ => console.log('Datos Encontrado')),
    catchError(error =>{
      console.log("error al buscar")
      return of(error as Post[])
    })
    );
}
  getPostId(id: number): Observable <Post[]>{
  return this.http.get<Post[]>(this.API_URL + '/'+id).pipe(
    tap(_ => console.log('Datos Encontrado')),
    catchError(error =>{
      console.log("error al buscar")
      return of(error as Post[])
    })
  );
}
 //Consultar post por UserId
 getPostUser(idUser: number): Observable <Post[]>{
  return this.http.get<Post[]>(this.API_URL+ '?userId='+ idUser).pipe(
    tap(_ => console.log('Datos Encontrado')),
    catchError(error =>{
      console.log("error al buscar")
      return of(error as Post[])
    })
    );
}
}

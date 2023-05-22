import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { User } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  //Este me retorna un listado de usuarios
  getUsers(): Observable <User[]>{
    return this.http.get<User[]>(this.API_URL).pipe(
      tap(_ => console.log('Usuarios Encontrado')),
      catchError(error =>{
        console.log("error")
        return of(error as User[])
      })
      );
  }

  //Este me retorna un usuario
  getOUsersId(id: number): Observable<User>{
    return this.http.get<User>(this.API_URL + '/'+id)
    .pipe(
      tap(_ => console.log('Usuario encontrado')),
      catchError(error =>{
        console.log("error al consultar")
        return of(error as User)
      })
    );
  }
}

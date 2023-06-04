import { Component } from '@angular/core';
import { Post } from '../../Models/Post';
import { User } from '../../Models/Users';
import { PostService } from '../../Services/post.service';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  post : Post[]=[];
  postUser : Post[]=[];
  users :User[] = [];
  idUser = 1;

  constructor(private postServices :PostService, private userServices :UsersService,private router: Router) { }

  ngOnInit() {
   this.getPost();
   this.getUser();
   this.getPostUser();
  }
  getPost(){
    this.postServices.getPost().subscribe(result => {
      this.post= result;
      console.log(this.post)
    });
  }
  getUser(){
    this.userServices.getUsers().subscribe(result => {
      this.users  = result;
      console.log(this.users)
    });
  }
  getPostUser(){
    this.postServices.getPostUser(this.idUser).subscribe(result => {
      this.postUser = result;
    });;
  }
  getUserFullName(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    return user ? `${user.name} ${user.username}` : '';
  }
  
  getUserEmail(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    return user ? user.email : '';
  }
  verUsuario(user: User) {
    // Guardar el usuario seleccionado en una variable
    this.userServices.selectedUser = user;

    // Navegar a la página de detalles del usuario y sus publicaciones
    this.router.navigate(['/perfil']);
  }

 


}

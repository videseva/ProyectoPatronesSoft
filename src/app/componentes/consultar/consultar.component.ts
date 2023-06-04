import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../Models/Post';
import { User } from '../../Models/Users';
import { PostService } from '../../Services/post.service';
import { UsersService } from '../../Services/users.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent {
  post : Post[]=[];
  postUser : Post[]=[];
  users :User[] = [];
  idUser = 1;
  originalUsers: User[] = [];
  searchTerm: string = '';

  

  constructor(private postServices: PostService, private userServices: UsersService, private router: Router) { }

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

 
  verUsuario(user: User) {
    // Guardar el usuario seleccionado en una variable
    this.userServices.selectedUser = user;

    // Navegar a la página de detalles del usuario y sus publicaciones
    this.router.navigate(['/perfil']);
  }

  buscarUsuarios() {
  
    console.log('Buscando usuarios con el nombre...:', this.searchTerm);
       if (this.searchTerm.trim() === '') {
      this.getUser();
    } else {
      this.users = this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  VaciarInputBusqueda() {
    this.searchTerm = '';
    this.buscarUsuarios();
  }
}
  





import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { PostService } from '../../Services/post.service';
import { User } from '../../Models/Users';
import { Post } from '../../Models/Post';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: User | undefined;
  posts: Post[] = [];
  

  constructor(private userServices: UsersService, private postServices: PostService) {
   
  }

  ngOnInit() {
    this.user = this.userServices.selectedUser;
  
    if (this.user && this.user.id) { // Verificar si user y user.id están definidos
      this.postServices.getPostUser(this.user.id).subscribe(result => {
        this.posts = result;
      });
    }
   
  }
  // que me lleve a la tarjeta POST 
  scrollToPost() {
    const post = document.querySelector('.post') as HTMLElement;
  
    post.scrollIntoView({ behavior: 'smooth' });
  }
  
}



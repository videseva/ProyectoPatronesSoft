import { Component } from '@angular/core';
import { Post } from '../../Models/Post';
import { User } from '../../Models/Users';
import { PostService } from '../../Services/post.service';
import { UsersService } from '../../Services/users.service';

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

  constructor(private postServices :PostService, private userServices :UsersService) { }

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


 


}

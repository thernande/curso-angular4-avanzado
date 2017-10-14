import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public title: String;
  public user: User;

  constructor(private _route: ActivatedRoute, private _router: Router) {

  		this.title = "Registro";
  		this.user = new User('','','','','','ROLE_USER','');
  	}

  ngOnInit() {
  }

  onSubmit(){
  	console.log(this.user);
  }

}

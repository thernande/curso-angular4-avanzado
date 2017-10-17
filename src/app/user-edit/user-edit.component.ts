import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
	public title: string;
	public user = User;
	public identity;
	public token;


  constructor(
  	private _router: Router,
  	private _userService: UserService
  ) {
  	this.title = "Actualizar Mis Datos";
  	this.identity = localStorage.getItem('identity');
  	this.token = localStorage.getItem('token');
  	this.user = this.identity;
  }

  ngOnInit() {
  }

}

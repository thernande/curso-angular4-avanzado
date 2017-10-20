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
	public token: string;
	public status;
	public message;


  constructor(
  	private _router: Router,
  	private _userService: UserService
  ) {
  	this.title = "Actualizar Mis Datos";
  	this.identity = localStorage.getItem('identity');
  	this.token = localStorage.getItem('token');
  	this.user = JSON.parse(this.identity);
  }

  ngOnInit() {
  	
  }

  onSubmit(){
  	this._userService.UpdateUser(this.user).subscribe(
  		response => {
  			console.log(response);
  			if(!response.userUpdate){
  				this.status = "danger";
  				this.message= "no se actualizo";
  			}
  			else{
  				localStorage.setItem('identity', JSON.stringify(this.user));
  				this.status = "success";
				this.message = "el usuario "+this.user.name+" ha sido actualizado";
  				//subida de la imagen
  			}
  		},
  		error => {
  			var errorMessage = <any>error;

			if(errorMessage != null){
				var body = JSON.parse(error._body);
				this.status = "danger";
				this.message = "error";
			}
  		}
  	);
  }

}

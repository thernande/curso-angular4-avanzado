import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements DoCheck, OnInit {
  title: string;
  public identity;

  constructor(
  	private _userService: UserService,
  	private _route: ActivatedRoute, 
  	private _router: Router
  ){
  	this.title = "NgZOO";
  }
 
  ngOnInit(){
  	this.identity = this._userService.getIdentity();
  }

  ngDoCheck(){
  	this.identity = this._userService.getIdentity();
  }
  
  logout(){
  	localStorage.clear();
  	this.identity = null;
  	//this.token = null;
  	this._router.navigate(['/']);
  }

}

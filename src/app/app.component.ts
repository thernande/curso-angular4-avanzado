import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'NgZOO';
  email: string;

  ngOnInit(){
  	//this.email = localStorage.getItem('emailContacto');
  }

  ngDoCheck(){
  	this.email = localStorage.getItem('emailContacto');
  }

  eraseEmail(){
  	localStorage.removeItem('emailContacto');
  	localStorage.clear();
  	this.email = null;
  }
}

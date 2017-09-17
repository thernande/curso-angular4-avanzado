import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-show-email',
  template: `<h4>{{title}}</h4>
  <li *ngIf="email"><a><strong>Email de contacto:</strong>{{email}}  <button (click)='eraseEmail()' *ngIf="email">Eliminar Email</button> </a></li>`,
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements OnInit, DoCheck {
	title = "Mostrar Email";
	emailContact: string;
	email: string;

  constructor() { }

  ngOnInit(){
  	this.email = localStorage.getItem('emailContacto');
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

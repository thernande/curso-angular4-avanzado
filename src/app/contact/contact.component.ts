import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public title = 'contact';
	public emailContact: string;

  constructor() { }

  ngOnInit() {
  	console.log('contact.component cargado!!!');
  }

  saveEmail(){
  	localStorage.setItem('emailContacto', this.emailContact);
  	
  }

}

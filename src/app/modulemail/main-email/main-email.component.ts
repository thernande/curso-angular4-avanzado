import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  template: `
  				<h2>{{title}}</h2>
          <hr/>
  				<app-save-email></app-save-email>
  				<app-show-email></app-show-email>`,
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {
	title = "Modulo de Email";
	emailContact: string;

  constructor() { }

  ngOnInit() {
     console.log("componente principal del modulo cargado");
  }

}

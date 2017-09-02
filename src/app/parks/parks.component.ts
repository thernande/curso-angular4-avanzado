import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
	public name: string;
	public metrics: number;
	public veggies: string;
	public open: boolean;

  constructor() {
  		this.name = 'parque natural para caballos';
  		this.metrics = 450;
  		this.veggies = 'Alta';
  		this.open = true;
   }

  ngOnInit() {
  }

}

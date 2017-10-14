import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
	selector: 'store',
	templateUrl: './store.component.html',
	styles: ['h1 {color:blue}'],
	animations: [
		trigger('point', [
				state('inactive', style({
					border: '5px solid #ccc'
				})),
				state('active', style({
					border: '5px solid yellow',
					background: 'red',
					borderRadius: '50px'
				})),
				transition('inactive => active', animate('3s linear')),
				transition('active => inactive', animate('3s linear')),
			])
	]
})

export class StoreComponent implements OnInit{
	public titulo;
	public nombreDelParque:string;
	public myPark;
	public status;

	constructor(){
		this.titulo = "Esta es la tienda";
		this.status = "inactive";
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	seeDataPark(event){
		console.log(event);
		this.myPark = event;
	}

	textEditor(content){
		console.log(content);
	}

	statusChange(status){
		if(status == 'inactive'){
			this.status = 'active';
		}
		else{
			this.status = 'inactive';
		}
	}

	ngOnInit(){
		$('#buttonjq').click(function(){
			$('#textjq').removeClass('hidden').slideToggle();
		});
		$('#caja').dotdotdot({});
	}
}
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'store',
	templateUrl: './store.component.html',
	styles: ['h1 {color:blue}']
})

export class StoreComponent implements OnInit{
	public titulo;
	public nombreDelParque:string;
	public myPark;

	constructor(){
		this.titulo = "Esta es la tienda";
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

	ngOnInit(){
		$('#buttonjq').click(function(){
			$('#textjq').removeClass('hidden').slideToggle();
		});
		$('#caja').dotdotdot({});
	}
}
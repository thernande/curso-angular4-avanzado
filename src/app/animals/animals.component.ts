import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {
	public title: string;
  public animals: Animal;
  public url: string;

  constructor(
    private _animalService: AnimalService
  ) {
    this.title = "Animales"
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  	this.getAnimals();

  }

  getAnimals(){
    this._animalService.getAnimals().subscribe(
      response => {
        if(response.animals){
          this.animals = response.animals;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

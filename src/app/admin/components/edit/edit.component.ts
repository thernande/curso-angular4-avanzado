import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [UserService, AnimalService,UploadService]
})
export class EditComponent implements OnInit {
	public title: string;
  public animal: Animal;
  public token;
  public url: string;
  public status: string;
  public message: string;
  public edit: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Editar';
    this.token = this._userService.getToken();
    this.edit = true;
    this.url = GLOBAL.url;
    this.animal = new Animal('','','','',2017,'');
  }

  ngOnInit() {
    console.log('animal-add componente cargado');
    this.getAnimal();
  }

  onSubmit(){
    //console.log(this.animal);

    this._animalService.updateAnimal(this.token, this.animal._id, this.animal).subscribe(
      response => {
        console.log(response);
        if(!response.animalUpdate){
          this.status = "danger";
          this.message = "no se pudo Actualizar el animal";
        }
        else{
          this.animal = response.animalUpdate;

          //subir la imagen del animal
          if(this.filesToUpload == null){
            this.status = "danger";
            this.message = "no se guardo la imagen del animal";
          }else{
            this._uploadService.makeFileRequest(this.url+'/upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
                //console.log(this.animal);
                this._router.navigate(['/animal', this.animal._id]);
              }
              );
          }

        }
      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage != null){
          this.status = 'danger';
          this.message = 'error';
        }
      }
    );
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
  }

  getAnimal(){
    this._route.params.forEach((params: Params) =>{
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response => {
          if(!response.animal){
            this._router.navigate(['/']);
          }
          else{
            this.animal = response.animal;
          }
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/']);
        }
      )
    });
  }

}

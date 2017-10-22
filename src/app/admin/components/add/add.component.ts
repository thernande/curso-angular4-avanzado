import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, AnimalService,UploadService]
})
export class AddComponent implements OnInit {
	public title = "Añadir";
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status: string;
  public message: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Añadir';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.animal = new Animal('','','','',2017,this.identity._id);
  }

  ngOnInit() {
    console.log('animal-add componente cargado');
  }

  onSubmit(){
    //console.log(this.animal);

    this._animalService.addAnimal(this.token, this.animal).subscribe(
      response => {
        //console.log(response);
        if(!response.animalStored){
          this.status = "danger";
          this.message = "no se pudo guardar el animal";
        }
        else{
          this.animal = response.animalStored;

          //subir la imagen del animal
          if(this.filesToUpload == null){
            this.status = "danger";
            this.message = "no se guardo la imagen del animal";
          }else{
            this._uploadService.makeFileRequest(this.url+'/upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
                //console.log(this.animal);
                this._router.navigate(['/admin-panel/listado']);
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

}

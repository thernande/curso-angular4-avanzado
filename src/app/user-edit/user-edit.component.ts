import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UploadService, UserService]
})
export class UserEditComponent implements OnInit {
	public title: string;
	public user: User;
	public identity;
	public token: string;
	public status;
	public message;
  public url: string;


  constructor(
  	private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.url = GLOBAL.url;
  	this.title = "Actualizar Mis Datos";
  	this.identity = localStorage.getItem('identity');
  	this.token = localStorage.getItem('token');
  	this.user = JSON.parse(this.identity);
  }

  ngOnInit() {

  }

  onSubmit(){
  	this._userService.UpdateUser(this.user).subscribe(
  		response => {
  			if(!response.userUpdate){
  				this.status = "danger";
  				this.message= "no se actualizo";
  			}
  			else{
  				localStorage.setItem('identity', JSON.stringify(this.user));
  				this.status = "success";
				  this.message = "el usuario "+this.user.name+" ha sido actualizado";
  				//subida de la imagen
          if(this.filesToUpload != null){
            this._uploadService.makeFileRequest(this.url+'/upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.user.image = result.image;
                localStorage.setItem('identity', JSON.stringify(this.user));
                //console.log(this.user);
              }
              );
          }
  			}
  		},
  		error => {
  			var errorMessage = <any>error;

			if(errorMessage != null){
				var body = JSON.parse(error._body);
				this.status = "danger";
				this.message = "error";
			}
  		}
  	);
  }
  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}

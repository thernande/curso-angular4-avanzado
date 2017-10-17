import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


// Componentes
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ParksComponent } from './parks/parks.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { KeeperComponent } from './keeper/keeper.component';
import { SimpleTinyComponent } from './simple-tiny/simple-tiny.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//Modulo
import { ModulemailModule } from './modulemail/modulemail.module';
import { AdminModule } from './admin/admin.module';

//Servicios
import { UserService } from './services/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent, 
    StoreComponent, 
    ParksComponent, 
    HomeComponent, 
    AnimalsComponent, 
    ContactComponent, 
    KeeperComponent,
    SimpleTinyComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModulemailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

//Modulo
import { ModulemailModule } from './modulemail/modulemail.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent, 
    StoreComponent, 
    ParksComponent, 
    HomeComponent, 
    AnimalsComponent, 
    ContactComponent, 
    KeeperComponent,
    SimpleTinyComponent
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
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

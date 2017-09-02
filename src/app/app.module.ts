import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { ParksComponent } from './parks/parks.component';

@NgModule({
  declarations: [
    AppComponent, StoreComponent, ParksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

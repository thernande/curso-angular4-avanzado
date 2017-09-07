import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { StoreComponent } from './components/store/store.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { KeeperComponent } from './keeper/keeper.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path:'contact', component: ContactComponent},
	{path:'animal', component: AnimalsComponent},
	{path:'keeper', component: KeeperComponent},
	{path:'store', component: StoreComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
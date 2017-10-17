import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { KeeperComponent } from './keeper/keeper.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path:'contact', component: ContactComponent},
	{path:'animal', component: AnimalsComponent},
	{path:'keeper', component: KeeperComponent},
	{path:'store', component: StoreComponent},
	{path:'login', component: LoginComponent},
	{path:'my-data', component: UserEditComponent},
	{path:'register', component: RegisterComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
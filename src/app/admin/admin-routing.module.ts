import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

//componentes

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const adminRoutes: Routes =[
	{
		path: 'admin-panel',
		component: MainComponent,
		children: [
			{ path: '', redirectTo: 'listado', pathMatch: 'full'},
			{ path: 'listado', component: ListComponent },
			{ path: 'crear', component: AddComponent },
			{ path: 'editar', component: EditComponent }
		]
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AdminRoutingModule { }

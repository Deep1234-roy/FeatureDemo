import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Style1Component } from './style1/style1.component';
import { Style2Component } from './style2/style2.component';
import { Style3Component } from './style3/style3.component';

const routes: Routes = [
  {component:Style1Component,path:""},
  {component:Style2Component,path:"style2"},
  {component: Style3Component,path:"style3"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

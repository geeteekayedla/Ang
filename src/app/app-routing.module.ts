import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CityComponent } from './components/city/city.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'/contacts',component:ContactsComponent},
  {path:'/cities',component:CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

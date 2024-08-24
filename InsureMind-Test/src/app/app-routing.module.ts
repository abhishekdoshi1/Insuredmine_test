import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarListComponent } from './star-war-list/star-war-list.component';
import { StarWarProfileComponent } from './star-war-profile/star-war-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'/starwars' , pathMatch:'full'},
  {path:'starwars',component: StarWarListComponent},
  {path:'starWarProfile/:id', component: StarWarProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

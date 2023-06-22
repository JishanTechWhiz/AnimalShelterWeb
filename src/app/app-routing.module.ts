import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { DonetionComponent } from './donetion/donetion.component';
import { HomeComponent } from './home/home.component';
import { OurImpactComponent } from './our-impact/our-impact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'impact',component:OurImpactComponent},
  {path:'adopt',component:AdoptionComponent},
  {path:'donate',component:DonetionComponent},
  {path:'about',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

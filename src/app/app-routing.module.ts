import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'offers', component: OffersComponent }
  //   { path: 'contact', component: ContactComponent },
  //   { path: '**', redirectTo: '/home', pathMatch: 'full' }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
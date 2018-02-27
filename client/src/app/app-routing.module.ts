import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewProductComponent } from './new-product/new-product.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: 'products/:id',component: DetailsComponent },
  { path: 'new',component: NewProductComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

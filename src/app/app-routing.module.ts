import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KioskoAboutComponent } from './kiosko-about/kiosko-about.component';
import { KioskoProductsComponent } from './kiosko-products/kiosko-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: KioskoProductsComponent
  },
  {
    path: 'about',
    component: KioskoAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

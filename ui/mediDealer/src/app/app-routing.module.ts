import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DealerComponent } from './modules/dealer/dealer.component';
import { MedicineComponent } from './modules/medicine/medicine.component';
import { SearchComponent } from './modules/search/search.component';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dealer', component: DealerComponent},
  {path: 'medicine', component: MedicineComponent},
  {path: 'search', component: SearchComponent},
  {path: 'admin', component: AdminComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

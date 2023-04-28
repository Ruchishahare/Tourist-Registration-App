import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTouristComponent } from './create-tourist/create-tourist.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';

const routes: Routes = [
  {path: 'tourists', component: TouristListComponent},
  {path: 'create-tourist', component: CreateTouristComponent},
  {path: '', redirectTo: 'tourists', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './forecast.component';
import { DetailsComponent } from './components/details/details.component';

  const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: ForecastComponent },
        { path: 'details/:id', component: DetailsComponent }
      ]
    }
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
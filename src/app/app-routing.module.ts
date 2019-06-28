import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [{
  path: "favs",
  loadChildren: "./components/fav/fav.module#FavModule",
  data: {
    breadcrumb: "Favs"
  }
},
// {
//   path: "details/:id",
//   loadChildren: "./components/forecast/forecast.module#ForecastModule",
//   data: {
//     breadcrumb: "Details"
//   }
// },
{
  path: "forecast",
  loadChildren: "./components/forecast/forecast.module#ForecastModule",
  data: {
    breadcrumb: "Forecast"
  },
},];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

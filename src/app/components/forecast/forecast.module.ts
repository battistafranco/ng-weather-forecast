import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastService } from './services/forecast.service';
import { ForecastComponent } from './forecast.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { ForecastRoutingModule } from './forecast-routing.module';

@NgModule({
  declarations: [ForecastComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule, 
    ForecastRoutingModule   

  ], providers: [ForecastService], exports: [ForecastComponent,ForecastRoutingModule]
})
export class ForecastModule { }

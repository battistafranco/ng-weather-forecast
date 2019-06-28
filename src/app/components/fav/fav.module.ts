import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavService } from './services/fav.service';
import { FavComponent } from './fav.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FavComponent }
    ]
  }
];

@NgModule({
  declarations: [FavComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [FavService],
  exports: [FavComponent]
})
export class FavModule { }

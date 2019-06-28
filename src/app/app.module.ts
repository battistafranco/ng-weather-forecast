import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';


import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { AppStoreModule } from './store/app-store.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,            
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    HttpClientModule,    
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    CoreModule,    
    MaterialModule,
    AppStoreModule,
    SharedModule, 
    ToastrModule,      
    AppRoutingModule,    
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: InMemoryDataService, useExisting: InMemoryDbService }], 
})
export class AppModule { }

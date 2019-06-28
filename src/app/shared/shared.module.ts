import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemperatureConverterPipe } from '../pipes/celciusfar.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, FormsModule,TemperatureConverterPipe],
  declarations: [TemperatureConverterPipe]
})
export class SharedModule {}

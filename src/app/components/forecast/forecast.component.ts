import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Forecast } from '../../models/forecast';
import { ForecastService } from './services/forecast.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { FavService } from 'src/app/components/fav/services/fav.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  selected: Forecast;
  forecast$: Observable<Forecast>;
  loading$: Observable<boolean>;
  message: string = "";

  form: FormGroup = new FormGroup({
    selectedFilterValue: new FormControl("")
  });


  constructor(private forecastService: ForecastService, private fabService: FavService) {

  }

  ngOnInit() {

  }


  search() {
    this.searchForecastByCity(this.form.value.selectedFilterValue);
  }

  searchForecastByCity(city) {
    this.forecast$ = this.forecastService.searchForecastByCity(city);
    this.close();
  }

  addFav(city)
  {
    this.fabService.add({ id: city.id, city: city.name, description: city.sys.country });
    this.message = 'Ok! Fav added.';
  }

  close() {
    this.selected = null;
  }

  select(forecast: Forecast) {
    this.selected = forecast;
  }
}

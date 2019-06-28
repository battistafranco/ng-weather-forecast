
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast } from '../../../models/forecast'
import { map } from 'rxjs/operators';

@Injectable()
export class ForecastService {
  private API_PATH = 'http://api.openweathermap.org/data/2.5';
  private APPID = '8b6724eb05f6d7ca7b6fba345dac3465';
  constructor(private http: HttpClient) { }

  searchForecastByCity(city: string) {
    return this.http.get(`${this.API_PATH}/find?q=${city}&units=metric&appid=${this.APPID}`)
      .pipe(map(forecast => {
        return forecast as Forecast;
      }));
  }

  getForecastByCityID(id: number): Observable<Forecast> {
    return this.http.get(`${this.API_PATH}/weather?id=${id}&units=metric&appid=${this.APPID}`)
      .pipe(map(res => res as Forecast));
  }
}

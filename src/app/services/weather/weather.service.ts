import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public weatherData :any;

  ngOnInit(): void {
    this.getWeatherData();
  }

  constructor(private http: HttpClient) {}
    
    getWeatherData() {
      return this.http.get<any>('/api/weather').subscribe(
        response => {
          console.log(response);
          this.getWeatherData = response;
        }
      );
    }
}




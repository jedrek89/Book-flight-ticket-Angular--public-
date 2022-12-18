import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public weatherData :any;

  ngOnInit(): void {
    // this.getWeatherData();
    
  }

  constructor(private http: HttpClient) {}
    
    getWeatherData(){
      
      // this.http.get('/api/weather').subscribe(response => {
      this.http.get('.netlify/functions/worldTimeAPI').subscribe(response => {
          console.log(response);
          this.weatherData = response;
          
        }, (error) => {
          console.log('error in getWeatherData: ', error);
        })
        return this.weatherData;
    }

}


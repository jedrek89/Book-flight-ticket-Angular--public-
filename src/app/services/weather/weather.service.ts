import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let weatherData1: any;

export{
  weatherData1
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}
  
  rootURL = '/'

  getWeatherData(){
      return weatherData1 = this.http.get(this.rootURL + '/data');
    }
}




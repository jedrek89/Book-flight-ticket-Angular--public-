import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    key: string = 'YOUR_KEY';
    url: string = 'YOUR_URL';

    // Backend url
    baseurl = 'http://localhost:4300';

  constructor(private http: HttpClient) {}
    
  getWeatherData(){
      return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=warsaw&units=metric&lang=en&&appid=${this.key}`);
    };
  
}




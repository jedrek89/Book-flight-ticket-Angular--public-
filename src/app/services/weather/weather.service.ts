import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    key: string = 'YOUR_KEY';
    url: string = 'YOUR_URL';

    // Backend url
    baseurl = 'http://localhost:4300/api/weather';

  constructor(private http: HttpClient) {}
    
  getWeatherData(){
      return this.http.get('https://localhost:4300/api/wetaher');
    };
  
}




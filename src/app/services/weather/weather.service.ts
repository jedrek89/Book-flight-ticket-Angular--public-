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
    key: string = 'YOUR_OPENWEATHER_API_KEY';
    url: string = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {}
    
  // getWeatherData(){
  //     return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=warsaw&units=metric&lang=en&&appid=YOUR_OPENWEATHERAPI_KEY');
  //   };
  
  getWeatherData(){
    try{
        this.http.get(`${window.location.origin}https://api.openweathermap.org/data/2.5/forecast?q=warsaw&units=metric&lang=en&&appid=`).subscribe((response: any) => {
      if(response.data){
        weatherData1 = response.data;
      }
    });
    
    } catch(error){
    //catch error
    }
    }
}




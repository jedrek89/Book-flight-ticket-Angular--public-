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

  getWeatherData(){
    try{
    this.http.get(`${window.location.origin}/https://api.openweathermap.org/data/2.5/forecast?q=warsaw&units=metric&lang=en&&appid=`).subscribe((response: any) => {
    if(response.data){
    console.log("response.data in weather.service.ts", response.data)
    let weatherData1 = response.data;
    }
    });
    } catch(error){
    //catch error
    }
}
}




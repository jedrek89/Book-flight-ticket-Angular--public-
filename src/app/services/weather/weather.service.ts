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
    this.http.get(`${window.location.origin}/../../../../server.js`).subscribe((response: any) => {
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




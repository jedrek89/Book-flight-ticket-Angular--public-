import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flightData } from '../../content/content.component'

export{
  flightData
}



@Injectable({
  providedIn: 'root'
})
export class FlightDataAPIService {
  flightDataAPI: any = '';

  constructor(private http: HttpClient) { }
  
  getFlightData(){

      this.http.get('.netlify/functions/flightDataAPI').subscribe(response => {
              console.log(response);
              this.flightDataAPI = response;
              flightData.dataAPI.data = this.flightDataAPI.data;
              
            }, (error) => {
              console.log('error in getWeatherData: ', error);
            })
            return console.log("getFlightData works!!", this.flightDataAPI)

  };
  
}

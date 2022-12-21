import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flightParam } from '../../content/content.component';
import { json } from 'express';

// export{
//   flightData
// }


@Injectable({
  providedIn: 'root'
})
export class FlightDataAPIService {
  flightDataAPI: any = '';

  constructor(private http: HttpClient) { }

  getFlightData(){
      this.http.post(`/.netlify/functions/flightDataAPI`, flightParam).subscribe(response => 
        {
              console.log(response);
              this.flightDataAPI = response;
            }, (error) => {
              console.log('error in getWeatherData: ', error);
            })
  };
  
}

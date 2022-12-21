import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flightData } from '../../content/content.component';
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

  // createParam(reqParam: {flyFrom: string, flyTo: string}){
  //     console.log("reqParam: ", reqParam);
  // }
  
  getFlightData(){
      this.http.post(`/.netlify/functions/flightDataAPI`, flightData).subscribe(response => 
        {
              console.log(response);
              this.flightDataAPI = response;
              // console.log("getFlightData works!!", this.flightDataAPI);
            }, (error) => {
              console.log('error in getWeatherData: ', error);
            })
            // return console.log("getFlightData works!!", this.flightDataAPI);
  };
  
}

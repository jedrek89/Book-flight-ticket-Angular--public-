import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flightParam } from '../../content/content.component';
import { json } from 'express';
import { Router } from '@angular/router';


var flightDataFromAPI: object;

export{
  flightDataFromAPI,
}

@Injectable({
  providedIn: 'root'
})
export class FlightDataAPIService {

  dataToShare = 'data;'

  constructor(private http: HttpClient, private router: Router) { }

  // Send output on init
  ngOnInit(): void {}

  getFlightData(){
      this.http.post(`/.netlify/functions/flightDataAPI`, flightParam).subscribe(response => 
        {
              flightDataFromAPI = response;
              this.router.navigate(['/', 'search-results']);
              console.log("API response", flightDataFromAPI);
            }, (error) => {
              console.log('error in getWeatherData: ', error);
            })
            return flightDataFromAPI;
  };

}

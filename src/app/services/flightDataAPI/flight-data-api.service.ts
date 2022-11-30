import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightDataAPIService {

  options = {
    method: 'GET',
    headers: {
      'X-Access-Token': 'YOUR_TOKEN',
      'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'YOUR_API_KEY'
    }
  };

  constructor(private http: HttpClient) { }

  getFlightData(){
    return this.http.get(`https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/week-matrix?destination=LHR&origin=WAW&currency=PLN&show_to_affiliates=true&depart_date=2022-11-30&return_date=2022-11-30`, this.options);
    // return this.http.get(`https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/week-matrix?destination=${flyToValue}&origin=${flyFromValue}&currency=${currency}&show_to_affiliates=true&depart_date=${flyDate1}&return_date=${flyDate2}`, options);
  };
  
}

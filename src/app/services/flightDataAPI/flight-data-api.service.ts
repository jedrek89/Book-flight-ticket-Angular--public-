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

  getFlightData(flyFromVal : string, departDate: string, passengersNum: number, flyToVal : string, returnDate : string, currency : string){
    flyFromVal = flyFromVal.substring(flyFromVal.length -3);
    flyToVal = flyToVal.substring(flyToVal.length -3);
    return this.http.get(`https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/week-matrix?destination=${flyToVal}&origin=${flyFromVal}&currency=${currency}&show_to_affiliates=true&depart_date=${departDate}&return_date=${returnDate}`, this.options);
  };
  
}

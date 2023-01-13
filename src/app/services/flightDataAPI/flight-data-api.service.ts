import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
// import { flightParam } from '../../content/content.component';
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

  getFlightDataFromBackend(flyFrom: string, departDate: string, flyTo: string, returnDate: string, currency: string): Observable<any> {
    return this.http.get<any>(`/.netlify/functions/flightDataAPI?flyFrom=${flyFrom}&departDate=${departDate}&flyTo=${flyTo}&returnDate=${returnDate}&currency=${currency}`)
  }
}




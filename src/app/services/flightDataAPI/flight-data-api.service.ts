import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// var flightDataFromAPI: object;

// export{
//   flightDataFromAPI,
// }

@Injectable({
  providedIn: 'root'
})
export class FlightDataAPIService {
  dataFromAPI: any = "";

  constructor(private http: HttpClient) { }

  // Send output on init
  ngOnInit(): void {}

  getFlightDataFromBackend(flyFrom: string, departDate: string, flyTo: string, returnDate: string, currency: string){
    this.dataFromAPI = this.http.get<any>(`/.netlify/functions/flightDataAPI?flyFrom=${flyFrom}&departDate=${departDate}&flyTo=${flyTo}&returnDate=${returnDate}&currency=${currency}`);
    return this.dataFromAPI;
  }
}






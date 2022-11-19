import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeAPIService {

  constructor(private http: HttpClient) { }

  getTimeFromAPI(continent: string, city: string){
    return this.http.get(`https://worldtimeapi.org/api/timezone/${continent}/${city}`);
  };
}

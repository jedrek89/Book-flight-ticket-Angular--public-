import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { flightParam } from '../content/content.component';
import{ flightDataFromAPI } from '../services/flightDataAPI/flight-data-api.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit { 
  flightParameters: any = flightParam;
  flightData: any = flightDataFromAPI;
  sizeOfFlightData: any; 
  showItemBoxC3Status: number [] = [];
  showMoreDetailsStatus: number = 0;
  tempVal: any;
  seatsA: number [] = [];
  seatsB: number [] = [];
  seatsC: number [] = [];
  seatsD: number [] = [];
  seatsE: number [] = [];
  seatsF: number [] = [];

  constructor() {
  }

  ngOnInit(): void {
    // is API response is ok
    if (flightDataFromAPI) {
      // get size of object array - data
      this.sizeOfFlightData = Object.keys(this.flightData.data).length;
      this.showItemBoxC3Status.length = this.sizeOfFlightData;
      this.showItemBoxC3Status.fill(0);
      console.log("this.showItemBoxC3Status", this.showItemBoxC3Status);
      console.log("this.showItemBoxC3Status.length", this.showItemBoxC3Status.length);
    }
    console.log('search results init');
    console.log('flightData', this.flightData);
    console.log('flight param: ', flightParam);
    console.log("flightParameters", this.flightParameters.flyFromName);
  }

  showItemBoxC3(data: any){
    console.log("id clicked", data);
    (this.showItemBoxC3Status[data] === 1) ? this.showItemBoxC3Status[data] = 0 : this.showItemBoxC3Status[data] = 1;
  }

  seatsReservation(data: string){
    console.log("seatsReservation", data);
  console.log("seatsA", this.seatsA);
  }

}



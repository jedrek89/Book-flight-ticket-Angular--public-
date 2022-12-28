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
      // console.log("this.showItemBoxC3Status", this.showItemBoxC3Status);
      // console.log("this.showItemBoxC3Status.length", this.showItemBoxC3Status.length);
    }
    // console.log('search results init');
    // console.log('flightData', this.flightData);
    // console.log('flight param: ', flightParam);
    // console.log("flightParameters", this.flightParameters.flyFromName);
    // console.log("this.seatsA", this.seatsA);

    // Call seats resevation
    this.seatsArrInit();
  }

  showItemBoxC3(data: any){
    console.log("id clicked", data);
    (this.showItemBoxC3Status[data] === 1) ? this.showItemBoxC3Status[data] = 0 : this.showItemBoxC3Status[data] = 1;
    return this.showItemBoxC3Status;
  }

  // Seats reservation
  seatsReservation(data1: string, data2 : number){
    if (data1 === 'A'){
      (this.seatsA[data2] === 0) ? this.seatsA[data2] = 1 : this.seatsA[data2] = 0;
    }

    if (data1 === 'B'){
      (this.seatsB[data2] === 0) ? this.seatsB[data2] = 1 : this.seatsB[data2] = 0;
    }

    if (data1 === 'C'){
      (this.seatsC[data2] === 0) ? this.seatsC[data2] = 1 : this.seatsC[data2] = 0;
    }

    if (data1 === 'D'){
      (this.seatsD[data2] === 0) ? this.seatsD[data2] = 1 : this.seatsD[data2] = 0;
    }

    if (data1 === 'E'){
      (this.seatsE[data2] === 0) ? this.seatsE[data2] = 1 : this.seatsE[data2] = 0;
    }

    if (data1 === 'F'){
      (this.seatsF[data2] === 0) ? this.seatsF[data2] = 1 : this.seatsF[data2] = 0;
    }
    console.log(`seats${data1}`+[data2]);
    return this.seatsA, this.seatsB, this.seatsC, this.seatsD, this.seatsE, this.seatsF;
  }

  // Seats arr init
  seatsArrInit(){
    this.seatsA.length = 38;
    this.seatsA.fill(0);
    this.seatsB.length = 38;
    this.seatsB.fill(0);
    this.seatsC.length = 38;
    this.seatsC.fill(0);
    this.seatsD.length = 38;
    this.seatsD.fill(0);
    this.seatsE.length = 38;
    this.seatsE.fill(0);
    this.seatsF.length = 38;
    this.seatsF.fill(0);
  }

}



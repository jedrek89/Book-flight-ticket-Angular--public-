import { Component, OnInit } from '@angular/core';
import { flightData } from '../content/content.component';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  flightDataFromAPI : any = flightData;
  // flightDataLenght: number = 0;
  



  constructor() { }

  ngOnInit(): void {
    console.log(flightData);
  }

  displayValue(){
    console.log("flightDataFromAPI.data", flightData.dataAPI);
    console.log("flightDataFromAPI.flyTo", flightData.flyFrom);
    console.log("flightDataFromAPI.flyTo", flightData.flyTo);
    console.log("flightData.dataAPI.data.length", flightData.dataAPI.data.length);
  }

}



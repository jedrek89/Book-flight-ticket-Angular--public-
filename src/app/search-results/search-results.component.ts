import { Component, OnInit } from '@angular/core';
import { flightData } from '../content/content.component';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  flightDataFromAPI : any = flightData;



  constructor() { }

  ngOnInit(): void {
    console.log(flightData);
  }

  displayValue(){
    console.log("flightDataFromAPI.data", flightData.dataAPI);
    console.log("flightDataFromAPI.data.lenght", flightData.dataAPI.data);
    console.log("flightDataFromAPI.flyTo", flightData.flyFrom);
    console.log("flightDataFromAPI.flyTo", flightData.flyTo);
  }

}



import { Component, OnInit } from '@angular/core';
import { flightData } from '../content/content.component';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  flightDataFromAPI : any = flightData;
  showItemBoxC3Status: number [] = [];

  // temp Variable - without API
  showMoreDetailsStatus: number = 0;


  constructor() { }

  ngOnInit(): void {
    console.log("flightDataFromAPI", this.flightDataFromAPI);
    this.showItemBoxC3Status.length = this.flightDataFromAPI.dataAPI.data.length;
    this.showItemBoxC3Status.fill(0);
  }

  showItemBoxC3(data: any){
    console.log("id clicked", data);
    (this.showItemBoxC3Status[data] === 1) ? this.showItemBoxC3Status[data] = 0 : this.showItemBoxC3Status[data] = 1;
  }

  seatsReservation(data: string){
    console.log("seatsReservation", data);
  }

}



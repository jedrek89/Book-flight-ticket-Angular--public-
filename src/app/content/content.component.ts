import { Component, OnInit, HostBinding } from '@angular/core';
import { min } from 'rxjs';
import { __values } from 'tslib';
import { WorldTimeAPIService } from '../services/worldTimeApi/world-time-api.service';
import { FlightDataAPIService } from '../services/flightDataAPI/flight-data-api.service';
import { Router } from '@angular/router';
import { response } from 'express';

let flightParam = {
  flyFromName: "",
  flyFrom: "WAW",
  departureDate: "2022-12-19",
  passNum: '1',
  flyTo: "LON",
  flyToName: "",
  returnDate: "2022-12-19",
  currency: "USD",
  dataAPI: {
    data: [],
  },
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  input1Value: string = "";
  input2Value: string = "";
  autocompleteStatus1 :number = 0;
  autocompleteStatus2 :number = 0;
  flyFromValFilter: string[] = [];
  flyToValFilter: string[] = [];
  flyFromValArr: string[] = ["Warsaw | Airport: WAW", "Warsaw | Airport: WMI"];
  flyFromValArrSliced: string[] = [];
  flyToValArr: string[] = ["London | Airport: LON", "London | Airport: LCY", "London | Airport : LGW", 
  "London | Airport: LHR", "Paris | Airport: CDG", "Paris | Airport: ORY", "Paris | Airport: BVA",  "New York | Airport: JFK",  "New York | Airport: LGA",  "New York | Airport: EWR"];
  flyToValArrSliced: string[] = [];
  input1Hint :string = "";
  input4Hint :string = "";
  
  constructor(private FlightDataAPIService: FlightDataAPIService, private router: Router){}
  ngOnInit(): void {
}

  // Input1 - fly from value form 
  getInput1(val: string){
    this.flyFromValFilter = this.flyFromValArr.filter((el) => el.toLowerCase().includes(val.toLowerCase()));
    this.flyFromValArrSliced = this.flyFromValArr.map(e => e.slice(0,val.length).toLowerCase());
    (val.length > 2 && this.flyFromValArrSliced.includes(val.toLowerCase())) ? this.autocomplete1_On(this.flyFromValFilter) : this.autocompleteStatus1 = 0;
    return this.flyFromValFilter;
  }

  autocomplete1_On(data :string[]){
    this.autocompleteStatus1 = 1;
  }
  
  autocomplete1_confirm(val: any){
    this.input1Value = val;
    this.input1Hint = val;
    this.autocompleteStatus1 = 0;
    return this.input1Value;
  }

  autocomplete1_Off(){
    this.autocompleteStatus1 = 0;
  }

    // Input4 - fly to value form 
  getInput2(val: string){
    this.input2Value = val;
    this.flyToValArrSliced = this.flyToValArr.map(e => e.slice(0,val.length).toLowerCase());
    this.flyToValFilter = this.flyToValArr.filter((el) => el.toLowerCase().includes(val.toLowerCase()));
    (val.length > 2 && this.flyToValArrSliced.includes(val.toLowerCase())) ? this.autocomplete2_On(this.flyToValFilter) : this.autocompleteStatus2 = 0;
    return this.flyToValFilter;
  }
  
  autocomplete2_On(data :string[]){
    this.autocompleteStatus2 = 1;
  }
  
  autocomplete2_confirm(val: any){
    this.input2Value = val;
    this.input4Hint = val;
    this.autocompleteStatus2 = 0;
    return this.input2Value;
  }

  autocomplete2_Off(){
    this.autocompleteStatus2 = 0;
  }

  getFlightParameters(flyFrom: string, departDate: string, passNum: string, flyTo: string, returnDate: string, currency: string) {
      flightParam.flyFromName = flyFrom.substring(0, flyFrom.length -15);
      flightParam.departureDate = departDate;
      flightParam.passNum = passNum;
      // flightParam.flyTo = flyTo.substring(flyTo.length -3);
      flightParam.flyToName = flyTo.substring(0, flyTo.length -15);
      flightParam.returnDate = returnDate;
      flightParam.currency = currency;
      this.FlightDataAPIService.getFlightDataFromBackend(flyFrom.substring(flyFrom.length -3), departDate, flyTo.substring(flyFrom.length -3), returnDate, currency).subscribe((data: any) =>{
        console.log("flightDataAPIresponseInContent", data)
      })
      // this.router.navigate(['/', 'search-results']);

      return flightParam;
    }
}





import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlightDataAPIService } from '../services/flightDataAPI/flight-data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  flyDataFromAPI: any;
  input1Value: string = "";
  input2Value: string = "";
  passNum: number = 1;
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
      // Async function with promise - 1s delay
      if (flyFrom != '' && departDate != '' && flyTo !='' && returnDate != '') {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            // resolve('this is a promise');
            this.FlightDataAPIService.getFlightDataFromBackend(flyFrom.substring(flyFrom.length -3), departDate, flyTo.substring(flyFrom.length -3), returnDate, currency).subscribe((data: any) =>{
            this.flyDataFromAPI = data;
            this.passNum = parseInt(passNum);
            // place for function lodaing - animation data html/css
            // navigate to flight search results component and send a data.
            this.router.navigate(['/', 'search-results'], {
            state: { flyFromName : flyFrom, flyToName : flyTo, dataAPI: this.flyDataFromAPI, passNum: this.passNum }
          });
            return this.flyDataFromAPI;
            })
          }, 1000);
        })
        promise.then((success)=>{
        })
        .catch((error) => {
          console.log(error);
        });
      }

      
    }



}





import { Component, OnInit, HostBinding } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { min } from 'rxjs';
import { __values } from 'tslib';
import { WorldTimeAPIService } from '../services/worldTimeApi/world-time-api.service';
import { FlightDataAPIService } from '../services/flightDataAPI/flight-data-api.service';


// Object to store date & time (int/string) from API and clock function - global scope
var dateTimeFromAPI = {
  dtTxt: 'dtTxt',
  timeString: 'time',
  date: 'date',
  hourInt: 0,
  minuteInt: 0,
  secondInt: 0,
  dayOfWeek: 0,
  dayName: 'name',
  unixTime: 0
};

export {
  dateTimeFromAPI
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
  flyFromValArr: string[] = ["Warsaw | F.Chopin WAW", "Warsaw | Modlin WMI"];
  flyFromValArrSliced: string[] = [];
  flyToValArr: string[] = ["London | Metropolitan Area LON", "London | London City Airport LCY", "London | London Gatwick Airport	LGW", 
  "London | London Heathrow Airport	LHR", "Paris", "New York"];
  flyToValArrSliced: string[] = [];
  input1Hint :string = "";
  input4Hint :string = "";

  constructor(private WorldTimeAPIService: WorldTimeAPIService, private FlightDataAPIService: FlightDataAPIService) {}
  // @ViewChild('input1') input1: ElementRef;
  ngOnInit(): void {
    // Berlin TZ = Warsaw TZ
    this.runWorldTimeAPI('Europe', 'Berlin');
  }
  

  runWorldTimeAPI(continent: string, city: string){
    this.WorldTimeAPIService.getTimeFromAPI(continent, city).subscribe( (data:any) => {
      // Api response
      // console.log("current time from API: ",data);
      // data conversion
      let dayArr: string [] = ["Sunday", "Monday", 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday"];
      let dataAPI = data.datetime.substring(0,10);
      // console.log("current data from API: ", dataAPI);
      let timeAPI = data.datetime.substring(11,19);
      // console.log("current time from API: ", timeAPI);
      // Cut strings value
      let hours = timeAPI.substring(0, 2);
      let minutes = timeAPI.substring(3,5);
      let seconds = timeAPI.substring(6,8);
      // convert split string values to integer
      let hoursInt = parseInt(hours);
      let minutesInt = parseInt(minutes);
      let secondsInt = parseInt(seconds);
      dateTimeFromAPI.hourInt = hoursInt;
      dateTimeFromAPI.minuteInt = minutesInt;
      dateTimeFromAPI.secondInt = secondsInt;
      dateTimeFromAPI.dayOfWeek = data.day_of_week;
      dateTimeFromAPI.dayName = dayArr[dateTimeFromAPI.dayOfWeek];
      dateTimeFromAPI.date = dataAPI;
      dateTimeFromAPI.timeString = timeAPI;
      dateTimeFromAPI.unixTime = data.unixtime;
      return dateTimeFromAPI;
    })
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
    // console.log("autocomplete1_confirm", val);
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
    // console.log("autocomplete1_confirm", val);
    this.input2Value = val;
    this.input4Hint = val;
    this.autocompleteStatus2 = 0;
    return this.input2Value;
  }

  autocomplete2_Off(){
    this.autocompleteStatus2 = 0;
  }

  getFlightParameters(param1: string, param2: string, param3: string, param4: string, param5: string, param6: string) {
    // @ViewChild('input1') myNameElem: ElementRef;
    this.FlightDataAPIService.getFlightData().subscribe((data:any) => {console.log("flight data API response", data)});   
    console.log('funkcja działa porawnie');
    console.log(param1);
    console.log(param2);
    console.log(param3);
    console.log(param4);
    console.log(param5);
    console.log(param6);
    }
}

function displayInput1(param1:any) {
  console.log(param1);
}

export function clock(val1: number, val2: number, val3: number){
  // increase seconds
  val1++;
  if (val1 == 60) {
    val2++;
    val1 = 0;
  }
  // increase minutes
  if (val2 == 60) {
    val3++;
    val2 = 0;
  }
  // increase hours
  if (val3 == 24) {
    val3 = 0;
  }
  dateTimeFromAPI.secondInt = val1;
  dateTimeFromAPI.minuteInt = val2;
  dateTimeFromAPI.hourInt = val3;
  let tempVal1;
  let tempVal2;
  let tempVal3;
  (val1 < 10) ? tempVal1 = `0${val1}` : tempVal1 = val1;
  (val2 < 10) ? tempVal2 = `0${val2}` : tempVal2 = val2;
  (val3 < 10) ? tempVal3 = `0${val3}` : tempVal3 = val3;
  // if value < 0 add 0 + val;
  dateTimeFromAPI.timeString = tempVal3 + ":" + tempVal2 + ":" + tempVal1;
  dateTimeFromAPI.dtTxt = (dateTimeFromAPI.date + " " + dateTimeFromAPI.timeString);
  // return console.log("time in app components: ",dateTimeFromAPI);
  return dateTimeFromAPI;
}


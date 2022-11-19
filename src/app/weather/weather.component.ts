import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';
import { dateTimeFromAPI } from '../content/content.component';
import { weatherData1 } from '../app.component'

let dayName: string [] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var weatherEl = 0;

console.log("weatherData1 before Component - wetaher component.ts", weatherData1);

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData1: any;
  dayName1: string = dateTimeFromAPI.dayName;
  time1: string = dateTimeFromAPI.timeString;
  date1: string = dateTimeFromAPI.date.substring(8, 10) + "." + dateTimeFromAPI.date.substring(5, 7) + "." + dateTimeFromAPI.date.substring(0, 4);
  wind1: number = 0.00;
  pressure1: number = 0;
  humidity1: number = 0;
  temp1: number = 0;
  tempMin1: number = 0;
  tempMax1: number = 0;
  description1: string ="";
  conditionDate1: string ="";
  widget1Temperature1: string = "";
  widget1Icon1: string = "";
  widget1Frc1Day: string = "";
  widget1Frc2Day: string = "";
  widget1_i: number = 0;
  weatherEl: number = 0;



  constructor(private WeatherService: WeatherService) { }

  ngOnInit(): void {

    console.log("dateTimeFromAPI in weather component", dateTimeFromAPI);
    console.log(dateTimeFromAPI.dtTxt);
    setInterval(() => {this.time1 = dateTimeFromAPI.timeString}, 1000);
    // console.log("Weather data from app.component", weatherData1);
    // this.WeatherService.getWeatherData().subscribe( (data:any) => {(this.weatherData1 = data);
    this.runWeatherApi(weatherData1, 0);
    // console.log("weather API", data);
    // })
    this.widget1Forecast(weatherData1);
  }

  runWeatherApi(data: any, index: number){
  this.wind1 = data.list[index].wind.speed;
  this.pressure1 = data.list[index].main.pressure;
  this.humidity1 = data.list[index].main.humidity;
  this.description1 = data.list[index].weather[0].description;
  this.conditionDate1 = data.list[index].dt_txt;
  this.widget1Temperature1 = data.list[index].main.temp_max;
  this.widget1Icon1 = data.list[index].weather[0].icon;
  console.log("icon: ", this.widget1Icon1);
  return this.widget1Icon1;
}

  widget1Forecast(data: any){
    // slice 1 array to 4 and get time from 1 element of array
    // get 1el from array -   if el x != el1 - begginning of 1 array, get 7 elements and put all 8 to 1 array
    // repeat for 3 next arrays
    this.widget1Frc1Day = data.list[0].dt_txt.substring(8, 10);
    this.widget1Frc2Day = data.list[1].dt_txt.substring(8, 10);
    // do {
    //   console.log("this i", this.widget1_i);
    //   this.widget1Frc2Day = data.list[this.widget1_i].dt_txt.substring(8, 10);
    //   console.log("this.widget1Frc2Day", this.widget1Frc2Day);

    //   this.widget1_i++;
    // } while (this.widget1Frc1Day === this.widget1Frc2Day);

    while (this.widget1Frc1Day === this.widget1Frc2Day) {
      this.widget1Frc2Day = data.list[this.widget1_i].dt_txt.substring(8, 10);
      // console.log("this.widget1Frc2Day", this.widget1Frc2Day);
      this.widget1_i++;
    }
    this.widget1_i--;
    console.log("this.widget1Frc2Day", this.widget1Frc2Day);
    console.log("this i", this.widget1_i);
    // console.log("widget1Forecast1Day: ", this.widget1Frc1Day);
    // console.log("widget1Forecast2Day ", this.widget1Frc2Day);
    // console.log("this i", this.widget1_i);
    // console.log(data.list[this.widget1_i].dt_txt.substring(8, 10));
    // let end1_Array = this.widget1_i + 7;
    // // First array
    // for (let index = this.widget1_i -1; index < end1_Array; index++) {
    //   console.log("FirstDay array to div - datael. num", this.widget1_i++);
    //   console.log(data.list[this.widget1_i].dt_txt.substring(8, 10));
    // }


  }

  resetWidgetList1(){
    this.weatherEl = 0;
    this.runWeatherApi(weatherData1, this.weatherEl);
  }

rightArrow1(){
  (this.weatherEl < weatherData1.list.length -1)? this.weatherEl++ : ""
  console.log("current weatherEl", this.weatherEl);
  this.runWeatherApi(weatherData1, this.weatherEl);
}

leftArrow1(){
  (this.weatherEl <= weatherData1.list.length -1 && this.weatherEl > 0)? this.weatherEl-- : ""
  console.log("current weatherEl", this.weatherEl);
  this.runWeatherApi(weatherData1, this.weatherEl);
}
}


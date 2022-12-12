import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { dateTimeFromAPI } from './content/content.component';
import { clock } from './content/content.component';
import { WeatherService } from '../app/services/weather/weather.service';
import { response } from 'express';

let weatherData1: any;
export{
  weatherData1
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular';
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  constructor(private WeatherService: WeatherService){

  }
  ngOnInit(): void {
    console.log("app init");
    this.WeatherService.getWeatherData().subscribe( (data:any) => {(weatherData1 = data);
      weatherData1 = data;
      console.log("weatherData1 from API", weatherData1);
      return weatherData1;
      })


      // this.WeatherService.getWeatherData().subscribe((response) =>{
      //   console.log('Response from proxy - API', response)
      // }, (error) => {
      //   console.log('error is: ', error);
      
      // })
    

}}

setInterval(() => {clock(dateTimeFromAPI.secondInt, dateTimeFromAPI.minuteInt, dateTimeFromAPI.hourInt); }, 1000);





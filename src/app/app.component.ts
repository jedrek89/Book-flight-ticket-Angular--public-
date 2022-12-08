import { Component } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { dateTimeFromAPI } from './content/content.component';
import { clock } from './content/content.component';
import { WeatherService, weatherData1 } from '../app/services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular';
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  constructor(private WeatherService: WeatherService){

  }
  ngOnInit(): void {
    console.log("app init");
    this.WeatherService.getWeatherData()
    // console.log("weatherData1 from API", weatherData1);


    // this.WeatherService.getWeatherData().subscribe( (data:any) => {(weatherData1 = data);
    //   weatherData1 = data;
    //   console.log("weatherData1 from API", weatherData1);
    //   return weatherData1;
    //   })
}}

setInterval(() => {clock(dateTimeFromAPI.secondInt, dateTimeFromAPI.minuteInt, dateTimeFromAPI.hourInt); }, 1000);





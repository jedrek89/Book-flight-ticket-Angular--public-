import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { dateTimeFromAPI } from './content/content.component';
import { clock } from './content/content.component';
import { WeatherService } from '../app/services/weather/weather.service';
import { environment } from '../environments/environment';

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
  // scrollToElement($element:any): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }

  data: any =[];

  constructor(private WeatherService: WeatherService){
    // console.log(environment.production); // Logs false for default environment
  }
  ngOnInit(): void {
    console.log("app init");

      this.WeatherService.getWeatherData().subscribe((response) =>{
        this.data = response;
        // console.log('Response from proxy - API', response.valueOf)
        console.log('this.data[]: ', this.data);
      }, (error) => {
        console.log('error is: ', error);
      })

}

}



setInterval(() => {clock(dateTimeFromAPI.secondInt, dateTimeFromAPI.minuteInt, dateTimeFromAPI.hourInt); }, 1000);





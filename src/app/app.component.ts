import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';

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
  data: any =[];

  constructor(){
  }
  ngOnInit(): void {
    console.log("app init");
}

}






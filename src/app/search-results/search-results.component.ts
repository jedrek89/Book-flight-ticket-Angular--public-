import { Component, OnInit } from '@angular/core';
import { flightDataFromAPI } from '../content/content.component';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
// console.log(flightDataFromAPI);
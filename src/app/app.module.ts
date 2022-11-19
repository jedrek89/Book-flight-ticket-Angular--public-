import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { WeatherComponent } from './weather/weather.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FlightDataAPIService } from './services/flightDataAPI/flight-data-api.service'
import { FormsModule } from '@angular/forms'; // 2 way data binding
import { WeatherService } from './services/weather/weather.service';
import { WorldTimeAPIService } from './services/worldTimeApi/world-time-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SearchResultsComponent,
    WeatherComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightDataAPIService, WeatherService, WorldTimeAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

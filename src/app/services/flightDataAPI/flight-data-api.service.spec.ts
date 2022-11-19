import { TestBed } from '@angular/core/testing';
import { FlightDataAPIService } from './flight-data-api.service';

describe('FlightDataAPIService', () => {
  let service: FlightDataAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightDataAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

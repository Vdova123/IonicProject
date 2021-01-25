import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

constructor(private httpService: HttpClient) { }

getCovidStatsByCountryCode(countryCode: string) {
   return this.httpService.get(`https://api.covid19api.com/country/${countryCode}/status/confirmed`);
}

getCountries() {
  return this.httpService.get("./assets/countries/countries.json");

}

}

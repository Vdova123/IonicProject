import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { CovidService } from '../../home/services/covid/covid.service';
import { Countries } from '../models/countries';
import { Country } from '../models/country';
import { CovidModel } from '../models/covid';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit, OnDestroy {
  covidStats: CovidModel[] = [];
  lastCovidStat: CovidModel = new CovidModel();
  countries: Countries = new Countries();
  selectedCountry = new Country();
  countryFlag: string;

  constructor(private covidService: CovidService) { 
    this.getCountriesForSelect();
    this.getCovidData('cz');
  }

  setCovidData(responseData: CovidModel[]) {
    this.covidStats = responseData;
    this.lastCovidStat = this.covidStats[this.covidStats.length -1];
    this.countryFlag = `https://flagpedia.net/data/flags/normal/${this.lastCovidStat.CountryCode.toLowerCase()}.png`
  }

  getCovidData(countryName: string) {
    this.covidService.getCovidStatsByCountryCode(countryName)
    .pipe(untilDestroyed(this))
    .subscribe((response: CovidModel[]) => {
      response !== null && response !== undefined && this.setCovidData(response);
    });
  }

  getCountriesForSelect() {
    this.covidService
    .getCountries()
    .pipe(untilDestroyed(this))
    .subscribe((result: Countries) => {
        if (result && result.code === 200) {
          this.countries = result;
        }
    })
  }

  onSelectCountry(country: Country) {
    this.getCovidData(country.code);
  }

  goBack() {
    window.history.back();
  }

  ngOnInit() {
  }
  
  ngOnDestroy(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OfferService {

  configUrl = 'assets/offers.json';
  constructor(private http: HttpClient) {
    
}

  getConfig() {
  return this.http.get(this.configUrl);
}
}

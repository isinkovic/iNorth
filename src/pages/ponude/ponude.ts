import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfferService } from '../../providers/offer-service/offer-service';

@Component({
  selector: 'page-ponude',
  templateUrl: 'ponude.html'
})
export class PonudePage implements OnInit{

  public offers: any;

  constructor(private offerService: OfferService) {
    
  }
  
  ngOnInit(){
    this.offerService.getConfig().subscribe(data => {
         console.log(data);
         this.offers = data;
     });
}

}

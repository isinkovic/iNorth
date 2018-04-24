import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdviceService } from '../../providers/advice-service/advice-service';

@Component({
  selector: 'page-about',
  templateUrl: 'lifestyle.html'
})
export class LifestylePage implements OnInit{

  public advices: any;

  constructor(private adviceService: AdviceService) {
    
  }
  
  ngOnInit(){
    this.adviceService.getConfig().subscribe(data => {
         console.log(data);
         this.advices = data;
     });
}

}

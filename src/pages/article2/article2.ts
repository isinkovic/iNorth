import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticleService } from '../../providers/article-service/article-service';

/**
 * Generated class for the Article2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article2',
  templateUrl: 'article2.html',
})
export class Article2Page implements OnInit{

  public articles: any;

  constructor(private articleService: ArticleService) {
    
  }
  
  ngOnInit(){
    this.articleService.getConfig().subscribe(data => {
         console.log(data);
         this.articles = data;
     });
}

}

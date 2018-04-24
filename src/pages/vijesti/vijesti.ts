import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticleService } from '../../providers/article-service/article-service';
import { Article1Page } from '../../pages/article1/article1';
import { Article2Page } from '../../pages/article2/article2';
import { Article3Page } from '../../pages/article3/article3';
import { Article4Page } from '../../pages/article4/article4';
import { Article5Page } from '../../pages/article5/article5';

@Component({
  selector: 'page-home',
  templateUrl: 'vijesti.html'
})
export class VijestiPage implements OnInit{

  article1Page = Article1Page;
  article2Page = Article2Page;
  article3Page = Article3Page;
  article4Page = Article4Page;
  article5Page = Article5Page;
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

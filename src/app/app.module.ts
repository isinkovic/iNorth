import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LifestylePage } from '../pages/lifestyle/lifestyle';
import { DogadajiPage } from '../pages/dogadaji/dogadaji';
import { VijestiPage } from '../pages/vijesti/vijesti';
import { TabsPage } from '../pages/tabs/tabs';
import { PonudePage } from '../pages/ponude/ponude';
import { Article1Page } from '../pages/article1/article1';
import { Article2Page } from '../pages/article2/article2';
import { Article3Page } from '../pages/article3/article3';
import { Article4Page } from '../pages/article4/article4';
import { Article5Page } from '../pages/article5/article5';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImpressumPage } from '../pages/impressum/impressum';
import { ArticleService } from '../providers/article-service/article-service';
import { AdviceService } from '../providers/advice-service/advice-service';
import { OfferService } from '../providers/offer-service/offer-service';


@NgModule({
  declarations: [
    MyApp,
    LifestylePage,
    DogadajiPage,
    VijestiPage,
    PonudePage,
    TabsPage,
    ImpressumPage,
    Article1Page,
    Article2Page,
    Article3Page,
    Article4Page,
    Article5Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LifestylePage,
    DogadajiPage,
    VijestiPage,
    PonudePage,
    TabsPage,
    ImpressumPage,
    Article1Page,
    Article2Page,
    Article3Page,
    Article4Page,
    Article5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticleService,
    AdviceService,
    OfferService
  ]
})
export class AppModule {}

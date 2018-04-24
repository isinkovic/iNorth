import { Component } from '@angular/core';

import { LifestylePage } from '../lifestyle/lifestyle';
import { DogadajiPage } from '../dogadaji/dogadaji';
import { VijestiPage } from '../vijesti/vijesti';
import { PonudePage } from '../ponude/ponude';
import { ImpressumPage } from '../impressum/impressum';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VijestiPage;
  tab2Root = LifestylePage;
  tab3Root = DogadajiPage;
  tab4Root = PonudePage;
  impressumPage = ImpressumPage;
  
  constructor() {

  }
  
}
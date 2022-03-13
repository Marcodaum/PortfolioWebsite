import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { NavbarComponent } from './navbar.component';

import {ScrollTopModule} from 'primeng/scrolltop';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
      
    TabViewModule
  ],
  providers: [],
  bootstrap: []
})
export class NavbarModule { }

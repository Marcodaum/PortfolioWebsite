import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { LinksComponent } from './links/links.component';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {TimelineModule} from 'primeng/timeline';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule } from 'primeng/panel';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavbarComponent,
    ContactComponent,
    WorkExperienceComponent,
    LinksComponent,
    WelcomePageComponent,
    LegalNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ButtonModule,
    ScrollTopModule,
    ScrollPanelModule,
    TabViewModule,
    TimelineModule,
    AccordionModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

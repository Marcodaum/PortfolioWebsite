import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TimelineModule} from 'primeng/timeline';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    WorkExperienceComponent,
    WelcomePageComponent,
    LegalNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ButtonModule,
    TimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

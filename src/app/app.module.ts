import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ConnexionsComponent } from './components/connexions/connexions.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SponsersComponent } from './components/sponsers/sponsers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutUsComponent,
    EventsComponent,
    WorkshopsComponent,
    SpeakersComponent,
    HighlightsComponent,
    ConnexionsComponent,
    ContactUsComponent,
    SponsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

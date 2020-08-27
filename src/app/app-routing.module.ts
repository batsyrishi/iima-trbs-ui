import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'highlights', component: HighlightsComponent },
  { path: 'contact-us', component: ContactUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

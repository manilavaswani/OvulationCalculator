import { Routes } from '@angular/router';
import { HomeComponent } from './navbar/components/home/home.component';
import { CalendarComponent } from './navbar/components/calendar/calendar.component';
import { InsightsComponent } from './navbar/components/insights/insights.component';
import { LearnComponent } from './navbar/components/learn/learn.component';
import { TrackComponent } from './navbar/components/track/track.component';
import { NotFoundComponent } from './navbar/components/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'calendar', component:CalendarComponent},
    {path:'insights', component:InsightsComponent},
    {path:'learn', component:LearnComponent},
    {path:'track', component:TrackComponent},
    {path:'**', component:NotFoundComponent}
];

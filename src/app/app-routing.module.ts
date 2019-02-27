import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { PlayVideoComponent } from './play-video/play-video.component';

const routes: Routes = [
  { path: '', redirectTo: '/search' ,pathMatch: 'full' },
  { path: 'search', component: YouTubeSearchComponent },
  { path: 'play/:id', component: PlayVideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

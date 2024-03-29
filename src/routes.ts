import { AppComponent } from './app/app.component';
import { CrisisListComponent } from './app/crisis-list/crisis-list.component';
import { HeroesListComponent } from './app/heroes-list/heroes-list.component';

export const routes = [
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'car-list', title: 'HEROS ARE HERE', component: HeroesListComponent },
];

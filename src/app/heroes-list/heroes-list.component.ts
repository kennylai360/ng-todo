import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroesService } from '../api/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  public heroes$: Observable<Object> = of([]);

  public constructor(private heroesService: HeroesService) {
    this.heroes$ = this.heroesService.getHeroes();
  }
}

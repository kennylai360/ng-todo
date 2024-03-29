import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class HeroesService {
  constructor(private httpClient: HttpClient) {}

  public getHeroes(): Observable<Object> {
    return this.httpClient.get('/assets/heroes-list.json').pipe(
      map((hero: Object) => {
        return hero;
      })
    );
  }
}

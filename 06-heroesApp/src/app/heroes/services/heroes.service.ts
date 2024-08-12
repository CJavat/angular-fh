import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseURL: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`);
  }

  public getHeroById(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseURL}/heroes/${id}`)
      .pipe(catchError((err) => of(undefined)));
  }

  public getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes?q=${query}&_limit=6`);
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseURL}/heroes`, hero);
  }

  public updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw new Error(`Hero id is required`);

    return this.http.patch<Hero>(`${this.baseURL}/heroes/${hero.id}`, hero);
  }

  public deleteHeroById(id: string): Observable<boolean> {
    if (!id) throw new Error(`Hero id is required`);

    return this.http.delete(`${this.baseURL}/heroes/${id}`).pipe(
      map((resp) => true) //! Si no hay error, devuelve TRUE.
      catchError((err) => of(false)), //! Si hay un error, devuelve FALSE.
    );
  }
}

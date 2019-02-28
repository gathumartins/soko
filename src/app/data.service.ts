import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://api.github.com/search/repositories';
  repoQuery = '?q=';
  constructor(private http: HttpClient) {}
  //  searchRepos() {
  //   return this.http.get(this.baseUrl);
  // ?q=javascript+language:angular&sort=stars&order=desc
  // }

    searchRepos(term: string) {
      return this.http.get(this.baseUrl + this.repoQuery + term);
    }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements  OnInit {

  results: Object;
  searchRepo$ = new Subject<string>();
  search: string;
  showRepo() { }
  constructor(private dataService: DataService) {}
  ngOnInit() {
    // this.searchRepos();
  }

  searchRepos(event) {
 if (event.keyCode === 13 && (!this.search || !this.search.length)) {
      return;
    }
    this.dataService.searchRepos(this.search)
      .subscribe((response: any) => {
        this.results = response.items;
      }, (error: HttpErrorResponse) => {});
  }
}

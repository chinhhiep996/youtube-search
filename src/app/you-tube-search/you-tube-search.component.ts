import { Component, OnInit } from '@angular/core';

import { SearchResult } from '../model/search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.scss']
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() {}

  ngOnInit() {
  }

  updateResults(result: SearchResult[]): void {
    this.results = result;
    console.log("results:", this.results);
  }

}

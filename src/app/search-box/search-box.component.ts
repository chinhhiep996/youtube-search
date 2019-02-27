import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { SearchResult } from '../model/search-result.model';
import { YouTubeSearchService } from '../services/you-tube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youTube: YouTubeSearchService, private el: ElementRef) {}

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => {
        return e.target.value;
      }),
      filter((text: string) => text.length > 1),
      debounceTime(250),
      tap(() => this.loading.emit(true)),
      map((query: string) => this.youTube.search(query)),
      switchAll()
    ).subscribe(
      (results: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }
}

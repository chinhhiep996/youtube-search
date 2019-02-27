import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  public urlVideo: string;

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { this.getId(); }

  ngOnInit() {
    this.getId();
  }

  getId(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.urlVideo = `https://www.youtube.com/embed/${id}`;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoId = '-y4v-GlCqhs';
  suggestedQuality = 'highres';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';

  isLargeScreen: boolean;

  constructor() {
    this.isLargeScreen = window.innerWidth >= 992; // Ajusta según tus necesidades
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { // Corrige aquí, especificando el tipo como Event
    this.isLargeScreen = window.innerWidth >= 992; // Ajusta según tus necesidades
  }
}

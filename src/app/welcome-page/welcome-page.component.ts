import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  @Output() notifyScroll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  scroll() {
    this.notifyScroll.emit();
}
}

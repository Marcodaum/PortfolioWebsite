import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  @Output() notifyScroll: EventEmitter<any> = new EventEmitter();

  scroll() {
    this.notifyScroll.emit();
}
}

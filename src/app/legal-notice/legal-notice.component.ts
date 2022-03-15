import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {

  showLegalNotice = false;

  forwarder(url: string) {
    window.open(url,'_blank');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  birthday = new Date('2002-08-11T12:00:00');
  age:number = 0;
  startYear = 2020
  semesterNumber = 0

  ngOnInit(): void {
    let timeDiff = Math.abs(Date.now() - this.birthday.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    
    let currentDate = new Date();
    for (let i = this.startYear; i <= currentDate.getFullYear(); i++) {
      if (i == this.startYear) {
        this.semesterNumber++;
      } else if (i == currentDate.getFullYear()) {
        if (currentDate.getMonth() >= 8) {
          this.semesterNumber++;
        }
        if (currentDate.getMonth() >= 3) {
          this.semesterNumber++;
        }
      } else {
        this.semesterNumber += 2;
      }
    }
  }
}

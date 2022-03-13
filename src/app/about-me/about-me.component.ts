import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe = "My name is Marco, I’m 19 years old and currently studying B. Sc. Computer Science in the fourth semester at the 'Technische Hochschule Ingolstadt'. Apart from my studies I am involved into exciting projects at Airbus Defence and Space and Schanzer Racing Electric e.V. I've been interested in technology myself since I can remember. The ability to solve simple problems with a few lines of code quickly caught my eye at Computer science. But I am not only interested in what happens hidden in the depths of the operating system or the computer in general, no, but also what the user sees and experiences when interacting with a program.  Learning all these abilities to develop great software gives me great pleasure so that I am constantly working on expanding my knowledge and developing myself further."

  constructor() { }

  ngOnInit(): void {
  }

}

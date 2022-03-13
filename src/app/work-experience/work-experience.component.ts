import {Component} from '@angular/core';
@Component({  
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']

})
export class WorkExperienceComponent {

  events = [
    {status: 'Abitur', date: 'July 2020'},
    {status: 'Dual student at Airbus Defece and Space', date: 'September 2020 - now'},
    {status: 'Software Developer at Schanzer-Racing Electric e.V.', date: 'October 2021 - now'},
    {status: 'Founder of the startup "WoSind"', date: 'November 2021 - now'}
];;

}

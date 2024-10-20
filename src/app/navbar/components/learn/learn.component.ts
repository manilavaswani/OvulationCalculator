// import { Component, OnInit} from '@angular/core';
// import { MenstrualCycleService } from '../../../service/menstrual-cycle.service';
// import { MenstrualCycle } from '../../../model/menstrual-cycle.model';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-learn',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './learn.component.html',
//   styleUrl: './learn.component.scss'
// })
// export class LearnComponent implements OnInit{

//   cycleData? : MenstrualCycle;
//   constructor(private menstrualdata : MenstrualCycleService){}

//   ngOnInit(){

//     this.menstrualdata.getMenstrualCycleData().subscribe(
//       data => this.cycleData = data,
//       error => console.error('Error in fetching the data',error)
//     );

    
//   }

// }

import { Component, OnInit } from '@angular/core';
import { MenstrualCycleService } from '../../../service/menstrual-cycle.service';
import { MenstrualCycle } from '../../../model/menstrual-cycle.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-learn',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './learn.component.html',
    styleUrl: './learn.component.scss'
})
export class LearnComponent implements OnInit {
  cycleData: MenstrualCycle | null = null;

  constructor(private menstrualCycleService: MenstrualCycleService) {}
// constructor(){}
  ngOnInit() {
    debugger;
    this.menstrualCycleService.getMenstrualCycleData().subscribe(
      data => this.cycleData = data,
    );
  }
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  lastPeriodDate : any;
  // ovulationDay: any;
  nextPeriodDay: any;
  cycleLength : any;
  fertileDays = {
    start : new Date(),
    end : new Date()
  };
  cycleLengths: number[] = Array.from({length: 15}, (_, i) => i + 21); // 21 to 35 days
  ovulationDate: any;
  showResults : boolean = false;


  calculateFertilityDays(formdata : NgForm) {

    console.log(this.lastPeriodDate);
    console.log(this.cycleLength);
    if(!this.lastPeriodDate || !this.cycleLength){
      alert('Please enter both the last period date and cycle length.')
    }

    // console.log(typeof(this.lastPeriodDate));
    if (typeof this.lastPeriodDate === 'string') {
      this.lastPeriodDate = new Date(this.lastPeriodDate);
    }
    if (typeof this.cycleLength === 'string') {
      this.cycleLength = Number(this.cycleLength);
    }
    // getTime() to convert lastPeriodDate to milliseconds, then adding the (cycleLength-14) to milliseconds to the required time
    this.ovulationDate = new Date(this.lastPeriodDate.getTime() + (this.cycleLength - 15) * 24 * 60 * 60 * 1000);
    //  this.ovulationDay = this.ovulationDate.toDateString();
    // console.log(this.ovulationDate);

    this.nextPeriodDay = new Date(this.lastPeriodDate.getTime() + (this.cycleLength -1)*24*60*60*1000);
  

    this.fertileDays = {
      start : new Date(this.ovulationDate.getTime() - 4 * 24 *60 * 60 * 1000 ),
      end : new Date(this.ovulationDate.getTime() + 2 * 24 *60 * 60 * 1000 )
    };

  this.showResults = true;
  formdata.reset();
 
  }

  formatDate(date: Date){
    return date.toDateString();
  }

  cancle(){
    // formdata.reset();
    this.showResults = false;
  }
}


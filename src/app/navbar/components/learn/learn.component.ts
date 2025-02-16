import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { MenstrualCycleService } from '../../../service/menstrual-cycle.service';
import { MenstrualCycle } from '../../../model/menstrual-cycle.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReminderComponent } from '../../../reminder/reminder.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule, RouterModule, ReminderComponent],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent implements OnInit {
  cycleData: MenstrualCycle | null = null;
  private heroSection: HTMLElement | null = null;

  constructor(
    private menstrualCycleService: MenstrualCycleService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    // your init code
    this.heroSection = this.elementRef.nativeElement.querySelector('.hero-section');

  }

  // Fix 1: Correct method name to match the decorator
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {  // Fix 2: Method name was "onWindowsScroll" with an extra 's'
  //   const mainSection = this.elementRef.nativeElement.querySelector('.hero-section');
  //   const scrollPosition = window.scrollY;
    
  //   if (mainSection) {
  //     mainSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  //   }
  // }

}
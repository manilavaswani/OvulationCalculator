import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss'
})
export class InsightsComponent {

  faqs:any[]=[];

  constructor(private http : HttpClient){}

  ngOnInit(){

   this.http.get<any[]>('/assets/faqs.json').subscribe(data=>{
    this.faqs=data;
   })
  }
}


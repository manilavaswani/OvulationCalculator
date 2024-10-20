// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenstrualCycle } from '../model/menstrual-cycle.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenstrualCycleService {
  constructor(private http: HttpClient) { }

  getMenstrualCycleData(): Observable<MenstrualCycle> {
    return this.http.get<MenstrualCycle>('/assets/menstrual-cycle-data.json');
  }
}

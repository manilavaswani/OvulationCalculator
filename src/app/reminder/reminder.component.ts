import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.scss'
})
export class ReminderComponent {

  reminderdata: FormGroup;
  private firestore: Firestore = inject(Firestore);
 

  constructor(private fb : FormBuilder, private http : HttpClient){
    this.reminderdata = this.fb.group(
      {
        email:['',Validators.required],
        lastPeriod:['',Validators.required]

      }
    )
  }

  //will get the value of emailfield so that we can validate that field
  get email() {
    return this.reminderdata.get('email');//email validation check
  }

  //will get the value of lastperiod field so that we can validate that field
  get lastPeriod() {
    return this.reminderdata.get('lastPeriod'); //period date validation check
  }

  async onSubmit(){
    // console.log(this.reminderdata.value);
  
      if (this.reminderdata.valid) {
        // debugger;
        try {
          const docRef = await addDoc(collection(this.firestore, 'periodTrackerData'), this.reminderdata.value);
          console.log("Document written with ID: ", docRef.id);
          this.http.get('http://localhost:3000/trigger-reminder').subscribe({
            next: (res: any) => console.log("✅ Script Triggered Successfully:", res),
            error: (err: any) => console.error("❌ Error Triggering Script:", err)
          });
          this.reminderdata.reset();// reset the form value
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
  }
}

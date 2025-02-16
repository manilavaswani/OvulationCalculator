import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

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


  constructor(private fb : FormBuilder){
    this.reminderdata = this.fb.group(
      {
        email:['',Validators.required],
        lastPeriod:['',Validators.required]

      }
    )
  }

  get email() {
    return this.reminderdata.get('email');//email validation check
  }

  get lastPeriod() {
    return this.reminderdata.get('lastPeriod');
  }

  async onSubmit(){
    // console.log(this.reminderdata.value);
  
      if (this.reminderdata.valid) {
        // debugger;
        try {
          const docRef = await addDoc(collection(this.firestore, 'periodTrackerData'), this.reminderdata.value);
          console.log("Document written with ID: ", docRef.id);
          this.reminderdata.reset();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
  }
}

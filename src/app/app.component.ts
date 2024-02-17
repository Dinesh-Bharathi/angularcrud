import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpatientComponent } from './components/patients/addpatient/addpatient.component'; // Adjust path if needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openAddPatientModal() {
    this.dialog.open(AddpatientComponent);
  }
}

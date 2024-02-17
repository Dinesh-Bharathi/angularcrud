import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientsService } from '../../../Services/patients/patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css',
})
export class AddpatientComponent {
  isLoading$ = this.patientService.isLoading$;
  constructor(
    private dialogRef: MatDialogRef<AddpatientComponent>,
    private patientService: PatientsService,
    @Inject(MAT_DIALOG_DATA) private data: any // Optional for passed data
  ) {}

  ngOnInit() {}

  onClose() {
    this.dialogRef.close();
  }

  createPatient(patient: { patientName: string; contact: string }) {
    this.patientService.createPatient(patient).subscribe((res) => {
      this.onClose();
    });
  }
}

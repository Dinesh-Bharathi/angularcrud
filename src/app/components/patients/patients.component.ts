import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../Services/patient.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../sharedcomponents/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  patients$!: Observable<any[]>;
  isLoading$ = this.patientService.isLoading$;

  constructor(
    private patientService: PatientsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.patients$ = this.patientService.getPatients();
  }

  deletePatient(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this patient?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.patientService.deletePatient(id).subscribe(() => {
          this.patients$ = this.patientService.getPatients();
          // Handle successful deletion (e.g., update patient list)
        });
      }
    });
  }
}

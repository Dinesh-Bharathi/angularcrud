import { Component } from '@angular/core';
import { PatientsService } from '../../../Services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css',
})
export class AddpatientComponent {
  isLoading$ = this.patientService.isLoading$;
  constructor(
    private patientService: PatientsService,
    private router: Router
  ) {}

  createPatient(patient: { patientName: string; contact: string }) {
    this.patientService.createPatient(patient).subscribe((res) => {
      this.router.navigate(['/patients']);
    });
  }
}

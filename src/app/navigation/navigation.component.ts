import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddpatientComponent } from '../components/patients/addpatient/addpatient.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private dialog: MatDialog) {}
  title: string = 'Crud System';
  source: string = 'https://ik.imagekit.io/LyfngoDev/Microsite/LYFnGO_Logo.svg';
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  openAddPatientModal() {
    this.dialog.open(AddpatientComponent);
  }
}

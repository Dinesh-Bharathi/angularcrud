import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './components/patients/patients.component';
import { AddpatientComponent } from './components/patients/addpatient/addpatient.component';

const routes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'patients/addpatient',
    component: AddpatientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

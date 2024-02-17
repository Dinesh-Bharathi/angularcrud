import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface Patient {
  createdAt: string;
  patientName: string;
  contact: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private url = 'https://65847c9c4d1ee97c6bcfd7fb.mockapi.io/api/v1/patients';

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    this.isLoadingSubject.next(true);

    return this.http.get<Patient[]>(this.url).pipe(
      tap(() => this.isLoadingSubject.next(false)),
      catchError((error) => {
        this.isLoadingSubject.next(false);
        throw error;
      })
    );
  }

  createPatient(patient: {
    patientName: string;
    contact: string;
  }): Observable<any> {
    this.isLoadingSubject.next(true);

    return this.http.post<any>(this.url, patient).pipe(
      tap(() => this.isLoadingSubject.next(false)),
      catchError((error) => {
        this.isLoadingSubject.next(false);
        throw error;
      })
    );
  }

  deletePatient(id: string): Observable<any> {
    this.isLoadingSubject.next(true);

    return this.http.delete(`${this.url}/${id}`).pipe(
      tap(() => this.isLoadingSubject.next(false)),
      catchError((error) => {
        this.isLoadingSubject.next(false);
        throw error;
      })
    );
  }
}

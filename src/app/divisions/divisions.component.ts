import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Division } from '../division';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-divisions',
  imports: [
    RouterLink,
  ],
  templateUrl: './divisions.component.html',
  styleUrl: './divisions.component.css'
})
export class DivisionsComponent implements OnInit{
  public divisions: Division[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.getDivisions();
  }

  getDivisions() {
    this.http.get<Division[]>(`${environment.baseUrl}api/Divisions`).subscribe({
      next: result => this.divisions = result,
      error: error => console.error(error),
    });
  }
}

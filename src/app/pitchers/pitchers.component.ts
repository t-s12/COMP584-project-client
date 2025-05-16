import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pitcher } from '../pitcher';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-pitchers',
  imports: [RouterLink],
  templateUrl: './pitchers.component.html',
  styleUrl: './pitchers.component.css'
})
export class PitchersComponent {
  public player: Pitcher | null = null;
  
  constructor(
    private http: HttpClient, 
    private activatedRoute : ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.getPitcher(id);
    }
  }


  getPitcher(id: string){
    this.http.get<Pitcher>(`${environment.baseUrl}api/Pitchers/${id}`).subscribe({
      next: result => this.player = result,
      error: error => console.error(error),
    });
  }
}

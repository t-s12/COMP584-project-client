import { Team } from '../team';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-teams',
  imports: [RouterLink],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  public team: Team | null = null;

  constructor(private http: HttpClient, private activatedRoute : ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.getTeam(id);
    }

  }

  getTeam(id: string): void {
    this.http.get<Team>(`${environment.baseUrl}api/Teams/${id}/WithPlayers`).subscribe({
      next: result => this.team = result,
      error: error => console.error(error),
    });
  }
}

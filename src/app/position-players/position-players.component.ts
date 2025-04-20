import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Position_Player } from '../position-player';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-position-players',
  imports: [],
  templateUrl: './position-players.component.html',
  styleUrl: './position-players.component.css'
})
export class PositionPlayersComponent {
  public player: Position_Player | null = null;
  
  constructor(
    private http: HttpClient, 
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.getPositionPlayer(id);
    }
  }

  getPositionPlayer(id: string){
    this.http.get<Position_Player>(`${environment.baseUrl}api/Position_Players/${id}`).subscribe({
      next: result => this.player = result,
      error: error => console.error(error),
    });
  }
}

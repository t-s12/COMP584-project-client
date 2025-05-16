import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { Position_Player } from '../position-player';

@Component({
  selector: 'app-pitcher-edit',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './hitter-edit.component.html',
  styleUrl: './hitter-edit.component.css'
})
export class HitterEditComponent implements OnInit{
  form!: FormGroup;
  public hitter: Position_Player| undefined;
  public router = inject(Router);

  constructor(private http: HttpClient, 
    private activatedRoute : ActivatedRoute,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(){
    this.populateData();

    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      games_Played: new FormControl("", Validators.required),
      at_Bats: new FormControl("", Validators.required),
      plate_Appearances: new FormControl("", Validators.required),
      hits: new FormControl("", Validators.required),
      singles: new FormControl("", Validators.required),
      doubles: new FormControl("", Validators.required),
      triples: new FormControl("", Validators.required),
      home_Runs: new FormControl("", Validators.required),
      runs_Scored: new FormControl("", Validators.required),
      rbi: new FormControl("", Validators.required),
      walks: new FormControl("", Validators.required),
      intentional_Walks: new FormControl("", Validators.required),
      strikeouts: new FormControl("", Validators.required),
      hbp: new FormControl("", Validators.required),
      sac_Fly: new FormControl("", Validators.required),
      sac_Hit: new FormControl("", Validators.required),
      gdp: new FormControl("", Validators.required),
      stolen_Bases: new FormControl("", Validators.required),
      caught_Stealing: new FormControl("", Validators.required),
      batting_Average: new FormControl("", Validators.required),
    });
  }

  populateData(){
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<Position_Player>(`${environment.baseUrl}api/Position_Players/${id}`).subscribe({
      next: result => {
        this.hitter = result; 
        this.form.patchValue(this.hitter);
      },
      error: error => console.error(error),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    const dto = {
      name:                 this.form.value.name,
      games_Played:         +this.form.value.games_Played,
      at_Bats:              +this.form.value.at_Bats,
      plate_Appearances:    +this.form.value.plate_Appearances,
      hits:                 +this.form.value.hits,
      singles:              +this.form.value.singles,
      doubles:              +this.form.value.doubles,
      triples:              +this.form.value.triples,
      home_Runs:            +this.form.value.home_Runs,
      runs_Scored:          +this.form.value.runs_Scored,
      rbi:                  +this.form.value.rbi,
      walks:                +this.form.value.walks,
      intentional_Walks:    +this.form.value.intentional_Walks,
      strikeouts:           +this.form.value.strikeouts,
      hbp:                  +this.form.value.hbp,
      sac_Fly:              +this.form.value.sac_Fly,
      sac_Hit:              +this.form.value.sac_Hit,
      gdp:                  +this.form.value.gdp,
      stolen_Bases:         +this.form.value.stolen_Bases,
      caught_Stealing:      +this.form.value.caught_Stealing,
      batting_Average:      parseFloat(this.form.value.batting_Average),
    };
  
    this.http
      .put<void>(`${environment.baseUrl}api/Position_Players/${id}`, dto).subscribe({
        next: () => this.router.navigate([`/position_player/${id}`]),
        error: err => console.error('Update failed', err)
      }); 
  }
}

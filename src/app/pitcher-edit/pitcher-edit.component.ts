import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pitcher } from '../pitcher';
import { Location } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-pitcher-edit',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './pitcher-edit.component.html',
  styleUrl: './pitcher-edit.component.css'
})
export class PitcherEditComponent implements OnInit{
  form!: FormGroup;
  public pitcher: Pitcher | undefined;
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
      wins: new FormControl("", Validators.required),
      losses: new FormControl("", Validators.required),
      era: new FormControl("", Validators.required),
      games_Played: new FormControl("", Validators.required),
      games_Started: new FormControl("", Validators.required),
      quality_Starts: new FormControl("", Validators.required),
      complete_Games: new FormControl("", Validators.required),
      shutouts: new FormControl("", Validators.required),
      saves: new FormControl("", Validators.required),
      holds: new FormControl("", Validators.required),
      blown_Saves: new FormControl("", Validators.required),
      innings_Pitched: new FormControl("", Validators.required),
      total_Batters_Faced: new FormControl("", Validators.required),
      hits: new FormControl("", Validators.required),
      runs: new FormControl("", Validators.required),
      earned_Runs: new FormControl("", Validators.required),
      home_Runs: new FormControl("", Validators.required),
      walks: new FormControl("", Validators.required),
      intentional_Walks: new FormControl("", Validators.required),
      hbp: new FormControl("", Validators.required),
      wild_Pitches: new FormControl("", Validators.required),
      balks: new FormControl("", Validators.required),
      strikeouts: new FormControl("", Validators.required),
    });
  }

  populateData(){
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<Pitcher>(`${environment.baseUrl}api/Pitchers/${id}`).subscribe({
      next: result => {
        this.pitcher = result; 
        this.form.patchValue(this.pitcher);
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
      name:              this.form.value.name,
      wins:              +this.form.value.wins,
      losses:            +this.form.value.losses,
      era:               parseFloat(this.form.value.era),
      games_Played:      +this.form.value.games_Played,
      games_Started:     +this.form.value.games_Started,
      quality_Starts:    +this.form.value.quality_Starts,
      complete_Games:    +this.form.value.complete_Games,
      shutouts:          +this.form.value.shutouts,
      saves:             +this.form.value.saves,
      holds:             +this.form.value.holds,
      blown_Saves:       +this.form.value.blown_Saves,
      innings_Pitched:   parseFloat(this.form.value.innings_Pitched),
      total_Batters_Faced: +this.form.value.total_Batters_Faced,
      hits:              +this.form.value.hits,
      runs:              +this.form.value.runs,
      earned_Runs:       +this.form.value.earned_Runs,
      home_Runs:         +this.form.value.home_Runs,
      walks:             +this.form.value.walks,
      intentional_Walks: +this.form.value.intentional_Walks,
      hbp:               +this.form.value.hbp,
      wild_Pitches:      +this.form.value.wild_Pitches,
      balks:             +this.form.value.balks,
      strikeouts:        +this.form.value.strikeouts
    };
  
    this.http
      .put<void>(`${environment.baseUrl}api/Pitchers/${id}`, dto).subscribe({
        next: () => this.router.navigate([`/pitcher/${id}`]),
        error: err => console.error('Update failed', err)
      }); 
  }
}

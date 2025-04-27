import { Routes } from '@angular/router';
import { DivisionsComponent } from './divisions/divisions.component';
import { TeamsComponent } from './teams/teams.component';
import { PositionPlayersComponent } from './position-players/position-players.component';
import { PitchersComponent } from './pitchers/pitchers.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    {path: "divisions", component: DivisionsComponent},
    {path: "teams", component: TeamsComponent},
    {path: "teams/:id", component: TeamsComponent},
    {path: "position_player/:id", component: PositionPlayersComponent},
    {path: "pitcher/:id", component: PitchersComponent},
    {path: "login", component: LoginComponent},
    {path: "", component: DivisionsComponent, pathMatch: "full"},
];

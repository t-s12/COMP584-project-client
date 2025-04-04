import { Routes } from '@angular/router';
import { DivisionsComponent } from './divisions/divisions.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
    {path: "divisions", component: DivisionsComponent},
    {path: "teams", component: TeamsComponent},
    {path: "players", component: PlayersComponent},
    {path: "", component: DivisionsComponent, pathMatch: "full"},
];

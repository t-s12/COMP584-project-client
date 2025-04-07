import { Team } from "./team";

export interface Division {
    id: number;
    name: string;
    teams: Team[];
}

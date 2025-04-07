import { Player } from "./player";

export interface Team {
    id: number;
    name: string;
    divisionid: number;
    location: string;
    players: Player[];
}

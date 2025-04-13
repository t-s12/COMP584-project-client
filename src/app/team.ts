import { Pitcher } from "./pitcher";
import { Player } from "./player";
import { Position_Player } from "./position-player";

export interface Team {
    id: number;
    name: string;
    divisionid: number;
    location: string;
    players: Player[];
    pitchers: Pitcher[];
    position_Players: Position_Player[];
}

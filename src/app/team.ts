import { Pitcher } from "./pitcher";
import { Position_Player } from "./position-player";

export interface Team {
    id: number;
    name: string;
    divisionid: number;
    location: string;
    pitchers: Pitcher[];
    position_Players: Position_Player[];
}

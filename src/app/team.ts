import { Pitcher } from "./pitcher";
import { Position_Player } from "./position-player";

export interface Team {
    id: number;
    location: string;
    name: string;
    divisionid: number;
    pitchers: Pitcher[];
    position_Players: Position_Player[];
}

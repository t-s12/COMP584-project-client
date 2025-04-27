export interface Pitcher {
    id: number;
    teamId: number;
    name: string;
    wins: number;
    losses: number;
    era: number;
    games_Played: number;
    games_Started: number;
    quality_Starts: number;
    complete_Games: number;
    shutouts: number;
    saves: number;
    holds: number;
    blown_Saves: number;
    innings_Pitched: number;
    total_Batters_Faced: number;
    hits: number;
    runs: number;
    earned_Runs: number;
    home_Runs: number;
    walks: number;
    intentional_Walks: number;
    hbp: number;
    wild_Pitches: number;
    balks: number;
    strikeouts: number;
}

import { Name, PositionCode } from "./base";

export interface SkaterStatsLeaderCurrentGet {
    goalsSh:        Skater[];
    plusMinus:      Skater[];
    assists:        Skater[];
    goalsPp:        Skater[];
    faceoffLeaders: Skater[];
    penaltyMins:    Skater[];
    goals:          Skater[];
    points:         Skater[];
    toi:            Skater[];
}

export interface Skater {
    id:            number;
    firstName:     Name;
    lastName:      Name;
    sweaterNumber: number;
    headshot:      string;
    teamAbbrev:    string;
    teamName:      Name;
    teamLogo:      string;
    position:      PositionCode;
    value:         number;
}
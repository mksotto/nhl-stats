import { LeaderPlayer } from "./base";

export interface SkaterStatsLeadersCurrentGet {
    goalsSh:        LeaderPlayer[];
    plusMinus:      LeaderPlayer[];
    assists:        LeaderPlayer[];
    goalsPp:        LeaderPlayer[];
    faceoffLeaders: LeaderPlayer[];
    penaltyMins:    LeaderPlayer[];
    goals:          LeaderPlayer[];
    points:         LeaderPlayer[];
    toi:            LeaderPlayer[];
}


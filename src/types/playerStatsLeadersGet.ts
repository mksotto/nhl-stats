import { LeaderPlayer } from "./base";

export interface PlayerStatsLeadersGet {
    goalsSh:               LeaderPlayer[];
    plusMinus:             LeaderPlayer[];
    assists:               LeaderPlayer[];
    goalsPp:               LeaderPlayer[];
    faceoffLeaders:        LeaderPlayer[];
    penaltyMins:           LeaderPlayer[];
    goals:                 LeaderPlayer[];
    points:                LeaderPlayer[];
    toi:                   LeaderPlayer[];
    wins:                  LeaderPlayer[];
    shutouts:              LeaderPlayer[];
    savePctg:              LeaderPlayer[];
    goalsAgainstAverage:   LeaderPlayer[];
}
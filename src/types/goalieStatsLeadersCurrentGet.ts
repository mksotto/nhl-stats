import { LeaderPlayer } from "./base";

export interface GoalieStatsLeadersCurrentGet {
    wins:                  LeaderPlayer[];
    shutouts:              LeaderPlayer[];
    savePctg:              LeaderPlayer[];
    goalsAgainstAverage:   LeaderPlayer[];
}
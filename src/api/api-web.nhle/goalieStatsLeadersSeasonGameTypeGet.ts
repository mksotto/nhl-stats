import { makeRequest } from "./base";
import {PlayerStatsLeadersGet} from "../../types/playerStatsLeadersGet.ts";

export const goalieStatsLeadersSeasonGameTypeGet = (season: number, gameType: number) => makeRequest<PlayerStatsLeadersGet>({
    url: `/goalie-stats-leaders/${season}/${gameType}`,
    method: 'GET',
    params: {
        limit: 10,
    }
})
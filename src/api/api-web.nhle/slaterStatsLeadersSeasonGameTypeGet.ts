import { makeRequest } from "./base";
import {PlayerStatsLeadersGet} from "../../types/playerStatsLeadersGet.ts";

export const skaterStatsLeadersSeasonGameTypeGet = (season: number, gameType: number) => makeRequest<PlayerStatsLeadersGet>({
    url: `/skater-stats-leaders/${season}/${gameType}`,
    method: 'GET',
    params: {
        limit: 10,
    }
})
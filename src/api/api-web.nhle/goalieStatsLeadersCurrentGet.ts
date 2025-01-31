import { makeRequest } from "./base";
import {PlayerStatsLeadersCurrentGet} from "../../types/playerStatsLeadersCurrentGet.ts";

export const goalieStatsLeadersCurrentGet = () => makeRequest<PlayerStatsLeadersCurrentGet>({
    url: '/goalie-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    }
})
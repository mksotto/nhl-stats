import { makeRequest } from "./base";
import {PlayerStatsLeadersGet} from "../../types/playerStatsLeadersGet.ts";

export const goalieStatsLeadersCurrentGet = () => makeRequest<PlayerStatsLeadersGet>({
    url: '/goalie-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    }
})
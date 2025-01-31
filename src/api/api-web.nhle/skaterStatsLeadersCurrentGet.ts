import { makeRequest } from './base';
import {PlayerStatsLeadersCurrentGet} from "../../types/playerStatsLeadersCurrentGet.ts";

export const skaterStatsLeadersCurrentGet = () => makeRequest<PlayerStatsLeadersCurrentGet>({
    url: '/skater-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    }
})
import { makeRequest } from './base';
import {PlayerStatsLeadersGet} from "../../types/playerStatsLeadersGet.ts";

export const skaterStatsLeadersCurrentGet = () => makeRequest<PlayerStatsLeadersGet>({
    url: '/skater-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    }
})
import { makeRequest } from './base';
import { SkaterStatsLeadersCurrentGet } from "../../types/skaterStatsLeadersCurrentGet";

export const skaterStatsLeadersCurrentGet = () => makeRequest<SkaterStatsLeadersCurrentGet>({
    url: '/skater-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    }
})
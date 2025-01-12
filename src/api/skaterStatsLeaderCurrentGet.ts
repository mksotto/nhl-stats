import { makeRequest } from "./base";
import { SkaterStatsLeaderCurrentGet } from "../types/skaterStatsLeaderCurrentGet";

export const skaterStatsLeaderCurrentGet = () => makeRequest<SkaterStatsLeaderCurrentGet>({
    url: '/skaterStatsLeader/current',
    method: 'GET',
    params: {
        limit: 10,
    }
})
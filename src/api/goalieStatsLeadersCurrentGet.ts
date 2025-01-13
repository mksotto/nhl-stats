import { makeRequest } from "./base";
import { GoalieStatsLeadersCurrentGet } from "../types/goalieStatsLeadersCurrentGet";

export const goalieStatsLeadersCurrentGet = () => makeRequest<GoalieStatsLeadersCurrentGet>({
    url: '/goalie-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    }
})
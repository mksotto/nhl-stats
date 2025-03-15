import {nhlStatsRequestService} from "../base.ts";
import {PlayerAdvanced} from "../../../types/domain/nhl-stats.ts";

export const playersIdGet = (id: number) => nhlStatsRequestService<PlayerAdvanced>({
    url: `/players/${id}`,
    method: 'GET',
});
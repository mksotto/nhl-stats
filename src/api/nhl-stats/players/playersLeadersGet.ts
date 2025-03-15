import {nhlStatsRequestService} from "../base.ts";
import {Leaders} from "../../../types/domain/nhl-stats.ts";

export const playersLeadersGet = (season?: number, gameType?: 2 | 3) => nhlStatsRequestService<Leaders>({
    url: '/players/leaders',
    method: 'GET',
    params: {
        ...(season ? { season } : {}),
        ...(gameType ? { gameType } : {}),
    },
});
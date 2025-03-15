import {nhlStatsRequestService} from "../base.ts";
import {Player} from "../../../types/domain/nhl-stats.ts";

export const playersSpotlightGet = () => nhlStatsRequestService<Player[]>({
    url: '/players/spotlight',
    method: 'GET',
});
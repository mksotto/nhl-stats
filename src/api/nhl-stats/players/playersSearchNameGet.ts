import {nhlStatsRequestService} from "../base.ts";
import {SearchPlayer} from "../../../types/domain/nhl-stats.ts";

export const playersSearchNameGet = (name: string, active?: boolean) => nhlStatsRequestService<SearchPlayer[]>({
    url: `/players/search/${name}`,
    method: 'GET',
    params: {
        ...(active ? { active } : {}),
    },
});
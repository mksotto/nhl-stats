import {nhlStatsRequestService} from "../base.ts";
import {PlayerGamesLog} from "../../../types/domain/nhl-stats.ts";

export const playersIdGamesLogGet = (id: number, season?: number, gameType?: 2 | 3) =>
    nhlStatsRequestService<PlayerGamesLog>({
        url: `/players/${id}/games_log`,
        method: 'GET',
        params: {
            ...(season ? { season } : {}),
            ...(gameType ? { gameType } : {}),
        },
    });
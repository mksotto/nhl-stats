import {nhlStatsRequestService} from "../base.ts";
import {PlayersRoster} from "../../../types/domain/nhl-stats.ts";

export const teamsAbbrevRosterSeasonGet = (abbrev: string, season: number) => nhlStatsRequestService<PlayersRoster>({
    url: `/teams/${abbrev}/roster/${season}`,
    method: 'GET',
});
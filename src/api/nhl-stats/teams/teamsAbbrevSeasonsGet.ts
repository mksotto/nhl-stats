import {nhlStatsRequestService} from "../base.ts";
import {TeamSeasons} from "../../../types/domain/nhl-stats.ts";

export const teamsAbbrevSeasonsGet = (abbrev: string) => nhlStatsRequestService<TeamSeasons>({
    url: `/teams/${abbrev}/seasons`,
    method: 'GET',
});
import {useQuery} from "react-query";
import {teamsAbbrevRosterSeasonGet} from "../../api/nhl-stats/teams/teamsAbbrevRosterSeasonGet.ts";

export const useTeamsAbbrevRosterSeason = (abbrev: string, season?: number) => useQuery({
    queryKey: ['teamsAbbrevRosterSeason', abbrev, season],
    queryFn: () => teamsAbbrevRosterSeasonGet(abbrev, season!),
    enabled: Boolean(season),
});
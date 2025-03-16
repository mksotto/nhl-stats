import {useQuery} from "react-query";
import {teamsAbbrevSeasonsGet} from "../../api/nhl-stats/teams/teamsAbbrevSeasonsGet.ts";

export const useTeamsAbbrevSeasons = (abbrev: string) => useQuery({
    queryKey: ['teamsAbbrevSeasons', abbrev],
    queryFn: () => teamsAbbrevSeasonsGet(abbrev),
});
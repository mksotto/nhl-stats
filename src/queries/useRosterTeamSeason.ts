import {useQuery} from "react-query";
import {rosterTeamSeasonGet} from "../api/api-web.nhle/rosterTeamSeasonGet.ts";

export const useRosterTeamSeason = (team: string, season?: number) => useQuery({
    queryKey: ['roster', team, season],
    queryFn: () => rosterTeamSeasonGet(team, String(season)),
    enabled: Boolean(season),
})
import { RosterTeamSeasonGet } from "../types/rosterTeamSeason";
import { makeRequest } from "./base";

export const rosterTeamSeasonGet = (team: string, season: string) => makeRequest<RosterTeamSeasonGet>({
    url: `/roster/${team}/${season}`,
    method: 'GET',
});
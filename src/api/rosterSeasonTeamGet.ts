import { makeRequest } from "./base";

export const rosterTeamSeasonGet = (team: string) => makeRequest<number[]>({
    url: `/roster-season/${team}`,
    method: 'GET',
})
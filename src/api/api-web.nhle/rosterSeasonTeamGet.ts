import { makeRequest } from "./base";

export const rosterSeasonTeamGet = (team: string) => makeRequest<number[]>({
    url: `/roster-season/${team}`,
    method: 'GET',
})
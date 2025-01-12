import { PositionCode } from "./base";

export interface SearchPlayerGet {
    playerId:            string;
    name:                string;
    positionCode:        PositionCode;
    teamId:              null | string;
    teamAbbrev:          null | string;
    lastTeamId:          null | string;
    lastTeamAbbrev:      null | string;
    lastSeasonId:        null | string;
    sweaterNumber:       number | null;
    active:              boolean;
    height:              string;
    heightInInches:      number;
    heightInCentimeters: number;
    weightInPounds:      number;
    weightInKilograms:   number;
    birthCity:           string;
    birthStateProvince:  null | string;
    birthCountry:        string;
}
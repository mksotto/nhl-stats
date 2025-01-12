import { Name, PositionCode, ShootsCatches } from "./base";

export interface Player {
    id:                  number;
    headshot:            string;
    firstName:           Name;
    lastName:            Name;
    sweaterNumber:       number;
    positionCode:        PositionCode;
    shootsCatches:       ShootsCatches;
    heightInInches:      number;
    weightInPounds:      number;
    heightInCentimeters: number;
    weightInKilograms:   number;
    birthDate:           Date;
    birthCity:           Name;
    birthCountry:        string;
    birthStateProvince?: Name;
}

export interface RosterTeamSeasonGet {
    forwards: Player[];
    defensemen: Player[];
    goalies: Player[];
}
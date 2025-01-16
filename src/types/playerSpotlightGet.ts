import { Name, PositionCode } from "./base";

export interface PlayerSpotlightGet {
    playerId:      number;
    name:          Name;
    playerSlug:    string;
    position:      PositionCode;
    sweaterNumber: number;
    teamId:        number;
    headshot:      string;
    teamTriCode:   string;
    teamLogo:      string;
    sortId:        number;
}
export interface Name {
    default: string;
    cs?:     string;
    de?:     string;
    es?:     string;
    fi?:     string;
    sk?:     string;
    sv?:     string;
    fr?:     string;
}

export type PositionCode = 'L' | 'C' | 'R' | 'D' | 'G'

export type ShootsCatches = 'L' | 'R'

export interface LeaderPlayer {
    id:            number;
    firstName:     Name;
    lastName:      Name;
    sweaterNumber: number;
    headshot:      string;
    teamAbbrev:    string;
    teamName:      Name;
    teamLogo:      string;
    position:      PositionCode;
    value:         number;
}
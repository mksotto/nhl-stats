import { Name } from "./base";

export interface DraftDetails {
    year:        number;
    teamAbbrev:  string;
    round:       number;
    pickInRound: number;
    overallPick: number;
}

export interface FeaturedStats {
    season:        number;
    regularSeason: StatsBySeason;
    playoffs:      StatsBySeason;
}

export interface StatsBySeason {
    subSeason: PlayerStats;
    career:    PlayerStats;
}

export interface CareerTotals {
    regularSeason: PlayerStats;
    playoffs:      PlayerStats;
}

export interface PlayerStats {
    assists:             number;
    avgToi?:             string;
    faceoffWinningPctg?: number;
    gameWinningGoals:    number;
    gamesPlayed:         number;
    goals:               number;
    otGoals:             number;
    pim:                 number;
    plusMinus:           number;
    points:              number;
    powerPlayGoals:      number;
    powerPlayPoints:     number;
    shootingPctg:        number;
    shorthandedGoals:    number;
    shorthandedPoints:   number;
    shots:               number;
}

export interface Last5Game {
    assists:          number;
    gameDate:         Date;
    gameId:           number;
    gameTypeId:       number;
    goals:            number;
    homeRoadFlag:     string;
    opponentAbbrev:   string;
    pim:              number;
    plusMinus:        number;
    points:           number;
    powerPlayGoals:   number;
    shifts:           number;
    shorthandedGoals: number;
    shots:            number;
    teamAbbrev:       string;
    toi:              string;
}

export interface SeasonTotal {
    assists:                       number;
    avgToi?:                       string;
    faceoffWinningPctg?:           number;
    gameTypeId:                    number;
    gameWinningGoals?:             number;
    gamesPlayed:                   number;
    goals:                         number;
    leagueAbbrev:                  string;
    otGoals?:                      number;
    pim:                           number;
    plusMinus?:                    number;
    points:                        number;
    powerPlayGoals?:               number;
    powerPlayPoints?:              number;
    season:                        number;
    sequence:                      number;
    shootingPctg?:                 number;
    shorthandedGoals?:             number;
    shorthandedPoints?:            number;
    shots?:                        number;
    teamCommonName?:               Name;
    teamName:                      Name;
    teamPlaceNameWithPreposition?: Name;
}

export interface Award {
    trophy:  Name;
    seasons: TrophyPlayerStats[];
}

export interface TrophyPlayerStats {
    assists: number;
    blockedShots: number;
    gameTypeId: number;
    gamesPlayed: number;
    goals:  number;
    hits: number;
    pim: number;
    plusMinus: number;
    points: number;
    seasonId: number;
}

export interface CurrentTeamRoster {
    playerId:   number;
    lastName:   Name;
    firstName:  Name;
    playerSlug: string;
}

export interface PlayerPlayerIdLandingGet {
    playerId:                     number;
    isActive:                     boolean;
    currentTeamId?:                number;
    currentTeamAbbrev?:            string;
    fullTeamName?:                 Name;
    teamCommonName?:               Name;
    teamPlaceNameWithPreposition?: Name;
    firstName:                    Name;
    lastName:                     Name;
    badges?:                       any[];
    teamLogo?:                     string;
    sweaterNumber:                number;
    position:                     string;
    headshot?:                     string;
    heroImage?:                    string;
    heightInInches?:               number;
    heightInCentimeters?:          number;
    weightInPounds?:               number;
    weightInKilograms?:            number;
    birthDate?:                    Date;
    birthCity?:                    Name;
    birthStateProvince?:           Name;
    birthCountry?:                 string;
    shootsCatches?:                string;
    draftDetails?:                 DraftDetails;
    playerSlug?:                   string;
    inTop100AllTime?:              number;
    inHHOF?:                       number;
    featuredStats?:                FeaturedStats;
    careerTotals?:                 CareerTotals;
    shopLink?:                     string;
    twitterLink?:                  string;
    watchLink?:                    string;
    last5Games?:                   Last5Game[];
    seasonTotals?:                 SeasonTotal[];
    awards?:                       Award[];
    currentTeamRoster?:            CurrentTeamRoster[];
    name?:                         string;
    founded?:                      number;
    members?:                      string[];
}
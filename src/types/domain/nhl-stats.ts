/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type PositionCode = "L" | "C" | "R" | "D" | "G";

export type ShootsCatches = "L" | "R";

export interface Player {
  /** @example 8477492 */
  id: number;
  /** @example "Nathan MacKinnon" */
  name: string;
  /** @example 29 */
  sweaterNumber: number | null;
  position: PositionCode;
  headshot: string;
  currentTeam: PlayerTeam | null;
}

export interface PlayerTeam {
  /** @example 21 */
  id?: number;
  /** @example "COL" */
  abbrev: string | null;
  logo: string | null;
  /** @example "Colorado Avalanche" */
  name?: string;
}

export type PlayerAdvanced = Player & {
  /** @example true */
  isActive: boolean;
  info: PlayerInfo;
  emblems: PlayerEmblem[] | null;
  heroImage: string;
  lastSeasonStats:
    | ({
        /** @example "2024-25" */
        season: string;
      } & PlayerFeaturedStats)
    | null;
  careerStats: PlayerFeaturedStats;
  last5Games: PlayerLast5Games[] | null;
  seasonTotal: PlayerSeasonTotal[] | null;
  awards: PlayerAwards[] | null;
  currentTeamRoster: PlayerCurrentTeammate[] | null;
  description: PlayerDescription | null;
};

export interface PlayerDescription {
  title: string;
  biography: string;
}

export interface PlayerInfo {
  /** @example 183 */
  height: number;
  /** @example 91 */
  weight: number;
  shootsCatches: ShootsCatches;
  birth: {
    /** @format date */
    date: Date;
    /** @example "Halifax" */
    city: string;
    /** @example "Nova Scotia" */
    province: string | null;
    /** @example "CAN" */
    country: string;
  };
  draftDetails: PlayerDraftDetails;
}

export type PlayerDraftDetails = {
  /** @example 2013 */
  year: number;
  /** @example "COL" */
  teamAbbrev: string;
  /** @example 1 */
  round: number;
  /** @example 1 */
  pickInRound: number;
  /** @example 1 */
  overallPick: number;
} | null;

export type PlayerFeaturedStats = {
  regular: PlayerStatsBySeason;
  playoff: PlayerStatsBySeason;
} | null;

export type PlayerStatsBySeason = {
  /** @example 64 */
  gamesPlayed?: number;
  /** @example 27 */
  goals?: number;
  /** @example 73 */
  assists?: number;
  /** @example 100 */
  points?: number;
  /** @example -3 */
  plusMinus?: number;
  /** @example 38 */
  wins?: number;
  /** @example 6 */
  shutouts?: number;
  /** @example "2.42" */
  goalsAgainstAverage?: string;
  /** @example ".924" */
  savePctg?: string;
} | null;

export interface PlayerEmblem {
  url: string;
  title: string;
}

export interface PlayerLast5Games {
  /** @format date */
  gameDate: Date;
  /** @example "TOR" */
  opponentAbbrev: string;
  /** @example 2 */
  goals?: number;
  /** @example 1 */
  assists?: number;
  /** @example 3 */
  points?: number;
  /** @example "+5" */
  plusMinus?: string;
  /** @example 1 */
  powerPlayGoals?: number;
  /** @example 1 */
  shorthandedGoals?: number;
  /** @example 6 */
  shots?: number;
  /** @example 10 */
  shifts?: number;
  /** @example "25:28" */
  toi: string;
  /** @example 1 */
  gamesStarted?: number;
  /** @example "W" */
  decision?: string;
  /** @example 24 */
  shotsAgainst?: number;
  /** @example 1 */
  goalsAgainst?: number;
  /** @example ".924" */
  savePctg?: string;
}

export type PlayerSeasonTotal = {
  /** @example 2 */
  gameTypeId: number;
  /** @example "2024-25" */
  season: string;
  /** @example "NHL" */
  leagueAbbrev: string;
  /** @example "Colorado Avalanche" */
  teamName: string;
  /** @example 62 */
  gamesPlayed: number;
  /** @example 27 */
  goals?: number;
  /** @example 73 */
  assists?: number;
  /** @example 100 */
  points?: number;
  /** @example "-3" */
  plusMinus?: string;
  /** @example 42 */
  pim?: number;
  /** @example 10 */
  powerPlayGoals?: number;
  /** @example 13 */
  powerPlayPoints?: number;
  /** @example 8 */
  shorthandedGoals?: number;
  /** @example 20 */
  shorthandedPoints?: number;
  /** @example "25:28" */
  avgToi?: string;
  /** @example 10 */
  gameWinningGoals?: number;
  /** @example 10 */
  otGoals?: number;
  /** @example 405 */
  shots?: number;
  /** @example "9.7" */
  shootingPctg?: string;
  /** @example "42.6" */
  faceoffWinningPctg?: string;
  /** @example 34 */
  gamesStarted?: number;
  /** @example 26 */
  wins?: number;
  /** @example 6 */
  losses?: number;
  /** @example 2 */
  otLosses?: number;
  /** @example 1383 */
  shotsAgainst?: number;
  /** @example "2.42" */
  goalsAgainstAvg?: string;
  /** @example ".925" */
  savePctg?: string;
  /** @example 3 */
  shutouts?: number;
  /** @example "1383:24" */
  timeOnIce?: string;
} | null;

export interface PlayerAwards {
  /** @example "Stanley Cup" */
  trophy?: string;
  seasons?: {
    /** @example 11 */
    assists?: number;
    /** @example 12 */
    blockedShots?: number;
    /** @example 3 */
    gameTypeId: number;
    /** @example 20 */
    gamesPlayed: number;
    /** @example 13 */
    goals?: number;
    /** @example 28 */
    hits?: number;
    /** @example 8 */
    pim?: number;
    /** @example "11" */
    plusMinus?: string;
    /** @example 11 */
    points?: number;
    /** @example "2021-22" */
    season: string;
    /** @example 9 */
    wins?: number;
    /** @example 6 */
    losses?: number;
    /** @example "2.42" */
    goalsAgainstAverage?: string;
    /** @example ".924" */
    savePctg?: string;
  }[];
}

export interface PlayerCurrentTeammate {
  /** @example 8474567 */
  id: number;
  /** @example "Patrick Kane" */
  name: string;
  /** @example "patrick-kane-8474567" */
  playerSlug: string;
}

export type ArrayOfLeaders = Leader[];

export type Leader = Player & {
  /** @example "57" */
  value: string;
};

export interface Leaders {
  points: ArrayOfLeaders;
  goals: ArrayOfLeaders;
  assists: ArrayOfLeaders;
  goalsAgainstAverage: ArrayOfLeaders;
  savePctg: ArrayOfLeaders;
  shutouts: ArrayOfLeaders;
}

export type SearchPlayer = Player & {
  lastTeam?: PlayerTeam | null;
};

export interface PlayerRoster {
  /** @example 8477492 */
  id: number;
  /** @example "Nathan MacKinnon" */
  name: string;
  /** @example 29 */
  sweaterNumber: number;
  position: PositionCode;
  headshot: string;
  /** @example 183 */
  height: number;
  /** @example 91 */
  weight: number;
  shootsCatches: ShootsCatches;
  birth: {
    /** @format date */
    date: Date;
    /** @example "Halifax" */
    city: string;
    /** @example "Nova Scotia" */
    province: string | null;
    /** @example "CAN" */
    country: string;
  };
}

export interface PlayersRoster {
  forward: PlayerRoster[];
  defensemen: PlayerRoster[];
  goalies: PlayerRoster[];
}

export interface PlayerGamesLog {
  /** @example 20242025 */
  seasonId: number;
  gameTypeId: 2 | 3;
  playerStatsSeason: {
    /** @example 20242025 */
    season: number;
    gameTypes: (2 | 3)[];
  }[];
  gamesLog: PlayerGameLog[] | null;
}

export interface PlayerGameLog {
  /** @format date */
  gameDate: Date;
  /** @example "COL" */
  teamAbbrev: string;
  /** @example "EDM" */
  opponentAbbrev: string;
  /** @example 27 */
  goals: number;
  /** @example 73 */
  assists: number;
  /** @example 100 */
  points: number | null;
  /** @example "-3" */
  plusMinus: string | null;
  /** @example 4 */
  pim: number;
  /** @example 1 */
  powerPlayGoals: number | null;
  /** @example 2 */
  powerPlayPoints: number | null;
  /** @example 2 */
  shorthandedGoals: number | null;
  /** @example "3'" */
  shorthandedPoints: number | null;
  /** @example 1 */
  gameWinningGoals: number | null;
  /** @example 1 */
  otGoals: number | null;
  /** @example 13 */
  shots: number | null;
  /** @example 8 */
  shifts: number | null;
  /** @example "20:30" */
  toi: string;
  /** @example 34 */
  gamesStarted: number | null;
  decision: "W" | "L" | null;
  /** @example 34 */
  shotsAgainst: number | null;
  /** @example 2 */
  goalsAgainst?: number | null;
  /** @example ".925" */
  savePctg: string | null;
}

export type TeamSeasons = number[];

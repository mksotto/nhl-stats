import { TableProps } from "antd";
import {PlayerSeasonTotal} from "../../../../../types/domain/nhl-stats.ts";

export const LEAGUE_OPTIONS = [
    {label: 'NHL', value: 'nhl'},
    {label: 'All Leagues', value: 'all'},
];

export const SKATER_PARAMS: TableProps<PlayerSeasonTotal>['columns'] = [
    {
        title: 'Season',
        dataIndex: 'season',
        // render: (season: number) => `${String(season).substring(0, 4)}-${String(season).substring(6)}`,
        fixed: 'left'  as const,
    },
    {
        title: 'League',
        dataIndex: 'leagueAbbrev',
    },
    {
        title: 'Team',
        dataIndex: 'teamName',
        // render: (teamName: Name) => teamName.default
    },
    {
        title: 'GP',
        dataIndex: 'gamesPlayed',
        // render: (gamesPlayed: number) => (gamesPlayed ? gamesPlayed : '-'),
    },
    {
        title: 'G',
        dataIndex: 'goals',
        // render: (goals: number) => (goals ? goals : '0'),
    },
    {
        title: 'A',
        dataIndex: 'assists',
        // render: (assists: number) => (assists ? assists : '0'),
    },
    {
        title: 'P',
        dataIndex: 'points',
        // render: (points: number) => (points ? points : '0'),
    },
    {
        title: '+/-',
        dataIndex: 'plusMinus',
    },
    {
        title: 'PIM',
        dataIndex: 'pim',
        // render: (pim: number) => (pim ? pim : '-'),
    },
    {
        title: 'PPG',
        dataIndex: 'powerPlayGoals',
        // render: (powerPlayGoals: number) => (powerPlayGoals ? powerPlayGoals : '-'),
    },
    {
        title: 'PPP',
        dataIndex: 'powerPlayPoints',
        // render: (powerPlayPoints: number) => (powerPlayPoints ? powerPlayPoints : '-'),
    },
    {
        title: 'SHG',
        dataIndex: 'shorthandedGoals',
        // render: (shorthandedGoals: number) => (shorthandedGoals ? shorthandedGoals : '-'),
    },
    {
        title: 'SHP',
        dataIndex: 'shorthandedPoints',
        // render: (shorthandedPoints: number) => (shorthandedPoints ? shorthandedPoints : '-'),
    },
    {
        title: 'TOI',
        dataIndex: 'avgToi',
        // render: (avgToi: number) => (avgToi ? avgToi : '-'),
    },
    {
        title: 'GWG',
        dataIndex: 'gameWinningGoals',
        // render: (gameWinningGoals: number) => (gameWinningGoals ? gameWinningGoals : '-'),
    },
    {
        title: 'OTG',
        dataIndex: 'otGoals',
        // render: (otGoals: number) => (otGoals ? otGoals : '-'),
    },
    {
        title: 'S',
        dataIndex: 'shots',
        // render: (shots: number) => (shots ? shots : '-'),
    },
    {
        title: 'S%',
        dataIndex: 'shootingPctg',
        // render: (num: number) => (Math.round(num * 1000) / 10).toFixed(1),
    },
    {
        title: 'FO%',
        dataIndex: 'faceoffWinningPctg',
        // render: (num: number) => (Math.round(num * 1000) / 10).toFixed(1),
    },
];

export const GOALIE_PARAMS: TableProps<PlayerSeasonTotal>['columns'] = [
    {
        title: 'Season',
        dataIndex: 'season',
        // render: (season: number) => `${String(season).substring(0, 4)}-${String(season).substring(6)}`,
        fixed: 'left'  as const,
    },
    {
        title: 'League',
        dataIndex: 'leagueAbbrev',
    },
    {
        title: 'Team',
        dataIndex: 'teamName',
        // render: (teamName: Name) => teamName.default
    },
    {
        title: 'GP',
        dataIndex: 'gamesPlayed',
        // render: (gamesPlayed: number) => (gamesPlayed ? gamesPlayed : '-'),
    },
    {
        title: 'GS',
        dataIndex: 'gamesStarted',
        // render: (gamesStarted: number) => (gamesStarted ? gamesStarted : '-'),
    },
    {
        title: 'W',
        dataIndex: 'wins',
        // render: (wins: number) => (wins ? wins : '-'),
    },
    {
        title: 'L',
        dataIndex: 'losses',
        // render: (losses: number) => (losses ? losses : '-'),
    },{
        title: 'OT',
        dataIndex: 'otLosses',
        // render: (otLosses: number) => (otLosses ? otLosses : '-'),
    },
    {
        title: 'SA',
        dataIndex: 'shotsAgainst',
        // render: (shotsAgainst: number) => (shotsAgainst ? shotsAgainst : '-'),
    },
    {
        title: 'GAA',
        dataIndex: 'goalsAgainstAvg',
        // render: (num: number) => (num ? (Math.round(num * 100) / 100).toFixed(2) : '-')
    },
    {
        title: 'SV%',
        dataIndex: 'savePctg',
        // render: (num: number) => (num ? num.toFixed(3).replace(/^0\./, '.') : '-'),
    },
    {
        title: 'SO',
        dataIndex: 'shutouts',
        // render: (shutouts: number) => (shutouts ? shutouts : '-'),
    },
    {
        title: 'G',
        dataIndex: 'goals',
        // render: (goals: number) => (goals ? goals : '-'),
    },
    {
        title: 'A',
        dataIndex: 'assists',
        // render: (assists: number) => (assists ? assists : '-'),
    },
    {
        title: 'PIM',
        dataIndex: 'pim',
        // render: (pim: number) => (pim ? pim : '-'),
    },
    {
        title: 'TOI',
        dataIndex: 'timeOnIce',
        // render: (timeOnIce: number) => (timeOnIce ? timeOnIce : '-'),
    },
];
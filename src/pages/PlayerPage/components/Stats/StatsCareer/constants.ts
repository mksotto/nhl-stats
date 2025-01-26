import { TableProps } from "antd";
import { Name } from "../../../../../types/base";
import { SeasonTotal } from "../../../../../types/playerPlayerIdLandingGet";

export const SKATER_PARAMS: TableProps<SeasonTotal>['columns'] = [
    {
        title: 'Season',
        dataIndex: 'season',
        render: (season: number) => `${String(season).substring(0, 4)}-${String(season).substring(6)}`,
    },
    {
        title: 'League',
        dataIndex: 'leagueAbbrev',
    },
    {
        title: 'Team',
        dataIndex: 'teamName',
        render: (teamName: Name) => teamName.default
    },
    {
        title: 'GP',
        dataIndex: 'gamesPlayed',
    },
    {
        title: 'G',
        dataIndex: 'goals',
    },
    {
        title: 'A',
        dataIndex: 'assists',
    },
    {
        title: 'P',
        dataIndex: 'points',
    },
    {
        title: '+/-',
        dataIndex: 'plusMinus',
    },
    {
        title: 'PIM',
        dataIndex: 'pim',
    },
    {
        title: 'PPG',
        dataIndex: 'powerPlayGoals',
    },
    {
        title: 'PPP',
        dataIndex: 'powerPlayPoints',
    },
    {
        title: 'SHG',
        dataIndex: 'shorthandedGoals',
    },
    {
        title: 'SHP',
        dataIndex: 'shorthandedPoints',
    },
    {
        title: 'TOI',
        dataIndex: 'avgToi',
    },
    {
        title: 'GWG',
        dataIndex: 'gameWinningGoals',
    },
    {
        title: 'OTG',
        dataIndex: 'otGoals',
    },
    {
        title: 'S',
        dataIndex: 'shots',
    },
    {
        title: 'S%',
        dataIndex: 'shootingPctg',
        render: (num: number) => (Math.round(num * 1000) / 10).toFixed(1),
    },
    {
        title: 'FO%',
        dataIndex: 'faceoffWinningPctg',
        render: (num: number) => (Math.round(num * 1000) / 10).toFixed(1),
    },
];

export const GOALIE_PARAMS: TableProps<SeasonTotal>['columns'] = [
    {
        title: 'Season',
        dataIndex: 'season',
        render: (season: number) => `${String(season).substring(0, 4)}-${String(season).substring(6)}`,
    },
    {
        title: 'League',
        dataIndex: 'leagueAbbrev',
    },
    {
        title: 'Team',
        dataIndex: 'teamName',
        render: (teamName: Name) => teamName.default
    },
    {
        title: 'GP',
        dataIndex: 'gamesPlayed',
    },
    {
        title: 'GS',
        dataIndex: 'gamesStarted',
    },
    {
        title: 'W',
        dataIndex: 'wins',
    },
    {
        title: 'L',
        dataIndex: 'losses',
    },{
        title: 'OT',
        dataIndex: 'otLosses',
    },
    {
        title: 'SA',
        dataIndex: 'shotsAgainst',
    },
    {
        title: 'GAA',
        dataIndex: 'goalsAgainstAvg',
        render: (num: number) => (Math.round(num * 100) / 100).toFixed(2)
    },
    {
        title: 'SV%',
        dataIndex: 'savePctg',
        render: (num: number) => num.toFixed(3).replace(/^0\./, '.'),
    },
    {
        title: 'SO',
        dataIndex: 'shutouts',
    },
    {
        title: 'G',
        dataIndex: 'goals',
    },
    {
        title: 'A',
        dataIndex: 'assists',
    },
    {
        title: 'PIM',
        dataIndex: 'pim',
    },
    {
        title: 'TOI',
        dataIndex: 'timeOnIce',
    },
]
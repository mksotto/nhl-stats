import { TableProps } from "antd";
import dayjs from "dayjs";
import {PlayerGameLog} from "../../../../../types/domain/nhl-stats.ts";

export const SKATER_PARAMS: TableProps<PlayerGameLog>['columns'] = [
    {
        title: 'Date',
        dataIndex: 'gameDate',
        render: (gameDate: string) => dayjs(gameDate).format('DD MMM YYYY'),
        fixed: 'left' as const,
    },
    {
        title: 'Team',
        dataIndex: 'teamAbbrev',
    },
    {
        title: 'Opp',
        dataIndex: 'opponentAbbrev',
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
        title: 'SHIFT',
        dataIndex: 'shifts', 
     },
     {
        title: 'TOI',
        dataIndex: 'toi', 
     },
]

export const GOALIE_PARAMS: TableProps<PlayerGameLog>['columns'] = [
    {
        title: 'Date',
        dataIndex: 'gameDate',
        render: (gameDate: string) => dayjs(gameDate).format('DD MMM YYYY'),
        fixed: 'left'  as const,
    },
    {
        title: 'Team',
        dataIndex: 'teamAbbrev',
    },
    {
        title: 'Opp',
        dataIndex: 'opponentAbbrev',
    },
    {
       title: 'GS',
       dataIndex: 'gamesStarted',
    },
    {
       title: 'DEC',
       dataIndex: 'decision',
    },
    {
       title: 'SA',
       dataIndex: 'shotsAgainst', 
    },
    {
       title: 'GA',
       dataIndex: 'goalsAgainst',
    },
    {
       title: 'SV%',
       dataIndex: 'savePctg',
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
       dataIndex: 'toi', 
    },
]
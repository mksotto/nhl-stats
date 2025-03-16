import { TableProps } from "antd";
import dayjs from "dayjs";
import {PlayerLast5Games} from "../../../../types/domain/nhl-stats.ts";

export const SKATER_PARAMS: TableProps<PlayerLast5Games>['columns'] = [
    {
        title: 'Date',
        dataIndex: 'gameDate',
        render: (gameDate: string) => dayjs(gameDate).format('DD MMM YYYY'),
        width: 150,
        fixed: 'left'  as const,
    },
    {
        title: 'Opp',
        dataIndex: 'opponentAbbrev',
        align: 'center',
    },
    {
        title: 'G',
        dataIndex: 'goals',
        align: 'center',
    },
    {
        title: 'A',
        dataIndex: 'assists',
        align: 'center',
    },
    {
        title: 'P',
        dataIndex: 'points',
        align: 'center',
    },
    {
        title: '+/-',
        dataIndex: 'plusMinus',
        align: 'center',
    },
    {
        title: 'PPG',
        dataIndex: 'powerPlayGoals',
        align: 'center',
    },
    {
        title: 'SHG',
        dataIndex: 'shorthandedGoals',
        align: 'center',
    },
    {
        title: 'S',
        dataIndex: 'shots',
        align: 'center',
    },
    {
        title: 'SHIFT',
        dataIndex: 'shifts',
        align: 'center',
    },
    {
        title: 'TOI',
        dataIndex: 'toi',
        align: 'center',
    },
]

export const GOALIE_PARAMS: TableProps<PlayerLast5Games>['columns'] = [
    {
        title: 'Date',
        dataIndex: 'gameDate',
        render: (gameDate: string) => dayjs(gameDate).format('DD MMM YYYY'),
        width: 150,
        fixed: 'left'  as const,
    },
    {
        title: 'Opp',
        dataIndex: 'opponentAbbrev',
        align: 'center',
    },
    {
        title: 'GS',
        dataIndex: 'gamesStarted',
        align: 'center',
    },
    {
        title: 'DEC',
        dataIndex: 'decision',
        align: 'center',
    },
    {
        title: 'SA',
        dataIndex: 'shotsAgainst',
        align: 'center',
    },
    {
        title: 'GA',
        dataIndex: 'goalsAgainst',
        align: 'center',
    },
    {
        title: 'SV%',
        dataIndex: 'savePctg',
        align: 'center',
    },
    {
        title: 'TOI',
        dataIndex: 'toi',
        align: 'center',
    },
]
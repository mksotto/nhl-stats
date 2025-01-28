import { TableProps } from "antd"
import { GameLog } from "../../../../../types/playerPlayerIdGameLogGet"
import dayjs from "dayjs"

export const SKATER_PARAMS: TableProps<GameLog>['columns'] = [
    {
        title: 'Date',
        dataIndex: 'gameDate',
        render: (gameDate: string) => dayjs(gameDate).format('DD MMM YYYY'),
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
        render: (plusMinus: number) => {
         if (plusMinus > 0) {
            return `+${plusMinus}`
         } else {
            return plusMinus
         }
        }
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

export const GOALIE_PARAMS = [
    {
        title: 'Date',
        dataIndex: 'gameDate',
        render: (gameDate: string) => dayjs(gameDate).format('DD MMM YYYY'),
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
       render: (decision: string) => (decision ? decision : '-')
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
       render: (num: number) => (num ? num.toFixed(3).replace(/^0\./, '.') : '-'),
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
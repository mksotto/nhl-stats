import { TableProps } from "antd"
import { Last5Game } from "../../../../types/playerPlayerIdLandingGet"

export const SKATER_PARAMS: TableProps<Last5Game>['columns'] = [
    {
        title: 'Date',
        dataIndex: 'gameDate',
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
        title: 'PPG',
        dataIndex: 'powerPlayGoals', 
     },
     {
        title: 'SHG',
        dataIndex: 'shorthandedGoals', 
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
       title: 'TOI',
       dataIndex: 'toi', 
    },
]
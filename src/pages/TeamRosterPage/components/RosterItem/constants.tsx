import {TableProps} from "antd";
import dayjs from "dayjs";
import {PlayerRoster} from "../../../../types/domain/nhl-stats.ts";

export const PLAYER_PARAMS: Exclude<TableProps<PlayerRoster>['columns'], undefined>  = [
    {
        title: '#',
        dataIndex: 'sweaterNumber',
    },
    {
        title: 'Position',
        dataIndex: 'position',
    },
    {
        title: 'Catches',
        dataIndex: 'shootsCatches',
    },
    {
        title: 'Height (cm)',
        dataIndex: 'height',
    },
    {
        title: 'Weight (kg)',
        dataIndex: 'weight',
    },
    {
        title: 'Born',
        dataIndex: 'birthDate',
        render: (_, player) => (dayjs(player.birth.date).format('DD MMM YYYY'))
    },
    {
        title: 'Birthplace',
        key: 'birthplace',
        render: (_, player) => `${player.birth.city}, `
            + (player.birth.province ? `${player.birth.province}, ` : '')
            + player.birth.country,
    }
]
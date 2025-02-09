import {TableProps} from "antd";
import {Player} from "../../../../types/rosterTeamSeason.ts";
import dayjs from "dayjs";

export const PLAYER_PARAMS: Exclude<TableProps<Player>['columns'], undefined>  = [
    {
        title: '#',
        dataIndex: 'sweaterNumber',
    },
    {
        title: 'Position',
        dataIndex: 'positionCode',
    },
    {
        title: 'Catches',
        dataIndex: 'shootsCatches',
    },
    {
        title: 'Height',
        dataIndex: 'heightInCentimeters',
    },
    {
        title: 'Weight',
        dataIndex: 'weightInKilograms',
    },
    {
        title: 'Born',
        dataIndex: 'birthDate',
        render: (birthDate) => (dayjs(birthDate).format('DD MMM YYYY'))
    },
    {
        title: 'Birthplace',
        key: 'birthplace',
        render: (_, player) => `${player.birthCity.default}, `
            + (player.birthStateProvince?.default ? `${player.birthStateProvince.default}, ` : '')
            + `${player.birthCountry}`,
    }
]
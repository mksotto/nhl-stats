import { Flex, Select, Table, TableProps } from "antd";
import { FC } from "react";
import { PlayerPlayerIdLandingGet, SeasonTotal } from "../../../../../types/playerPlayerIdLandingGet";
import { SKATER_PARAMS, GOALIE_PARAMS } from "./constants";

type Props = {
    player: PlayerPlayerIdLandingGet
}

export const StatsCareer: FC<Props> = ({player}) => {

    if(!player.seasonTotals) return null;

    const data: SeasonTotal[] = player.seasonTotals

    const columns: TableProps<SeasonTotal>['columns'] = ( player.position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS )

    return (
        <Flex vertical gap={16}>
            <Flex justify="space-between" style={{width: '100%'}}>
                <div>
                    Career Stats
                </div>
                <Flex gap={8}>
                    <Select />
                    <Select />
                </Flex>
            </Flex>
            <Table columns={columns} dataSource={data} pagination={false} />
        </Flex>
    )
}
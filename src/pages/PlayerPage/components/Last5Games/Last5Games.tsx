import { Flex, Table, TableProps } from "antd";
import { FC } from "react";
import styles from './Last5Games.module.css';
import { SKATER_PARAMS, GOALIE_PARAMS} from './constants.ts';
import {PlayerAdvanced, PlayerLast5Games} from "../../../../types/domain/nhl-stats.ts";

type Props = {
    player: PlayerAdvanced;
};

export const Last5Games: FC<Props> = ({player}) => {
    if(!player.last5Games?.length) return;
    const data: PlayerLast5Games[] = player.last5Games;
    const columns: TableProps<PlayerLast5Games>['columns'] = (player.position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS)
    return (
        <Flex className={styles.container}>
            <Flex className={styles.title}>Last 5 Games</Flex>
            <Table<PlayerLast5Games> columns={columns} dataSource={data} pagination={false} className={styles.table} />
        </Flex>
    );
};
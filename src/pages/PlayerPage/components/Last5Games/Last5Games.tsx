import { Flex, Table, TableProps } from "antd";
import { FC } from "react";
import { PlayerPlayerIdLandingGet, Last5Game } from "../../../../types/playerPlayerIdLandingGet";
import styles from './Last5Games.module.css';
import { SKATER_PARAMS, GOALIE_PARAMS} from './constants.ts';

type Props = {
    player: PlayerPlayerIdLandingGet
}

export const Last5Games: FC<Props> = ({player}) => {
    if(!player.last5Games) return null;

    const data: Last5Game[] = player.last5Games

    const columns: TableProps<Last5Game>['columns'] = ( player.position !== 'G' ? SKATER_PARAMS : GOALIE_PARAMS )

    return (
        <Flex className={styles.container}>
            <Flex className={styles.title}>Last 5 Games</Flex>
            <Table<Last5Game> columns={columns} dataSource={data} pagination={false} className={styles.table} />
        </Flex>
    )
}
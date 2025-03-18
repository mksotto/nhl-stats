import {FC} from "react";
import {Flex, Table, TableProps} from "antd";
import styles from './RosterItem.module.css'
import {PLAYER_PARAMS} from "./constants.tsx";
import {useNavigate} from "react-router-dom";
import {PlayerRoster} from "../../../../types/domain/nhl-stats.ts";

type Props = {
    title: string;
    players: PlayerRoster[];
};

export const RosterItem: FC<Props> = ({title, players}) => {
    const navigate = useNavigate();
    const columns: TableProps<PlayerRoster>['columns'] = [
        {
            title: 'Player',
            key: 'player',
            render: (_, player) => (
                <Flex align='center' gap={16}>
                    <img
                        src={player.headshot}
                        alt={player.name}
                        className={styles.image}
                    />
                    <div
                        onClick={() => {navigate(`/players/${player.id}`)}}
                        className={styles.name}
                        style={{fontSize: 16, fontWeight: 600}}
                    >
                        {player.name}
                    </div>
                </Flex>),
            fixed: 'left',
        },
        ...PLAYER_PARAMS,
    ];
    return (
        <>
            <div className={styles.title}>{title}</div>
            <Table dataSource={players} columns={columns} pagination={false} className={styles.table}/>
        </>
    );
};
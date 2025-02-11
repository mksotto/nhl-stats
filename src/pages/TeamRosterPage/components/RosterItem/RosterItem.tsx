import {FC} from "react";
import {Flex, Table, TableProps} from "antd";
import {Player} from "../../../../types/rosterTeamSeason.ts";
import styles from './RosterItem.module.css'
import {PLAYER_PARAMS} from "./constants.tsx";
import {useNavigate} from "react-router-dom";

type Props = {
    title: string;
    players: Player[];
};

export const RosterItem: FC<Props> = ({title, players}) => {

    const navigate = useNavigate();

    if (!players) return

    const columns: TableProps<Player>['columns'] = [
        {
            title: 'Player',
            key: 'player',
            render: (_, player) => (
                <Flex align='center' gap={16}>
                    <img
                        src={player.headshot}
                        alt={player.firstName.default + player.lastName.default}
                        className={styles.image}
                    />
                    <div
                        onClick={() => {navigate(`/player/${player.id}`)}}
                        className={styles.name}
                        style={{fontSize: 16, fontWeight: 600}}
                    >
                        {player.firstName.default} {player.lastName.default}
                    </div>
                </Flex>),
            fixed: 'left',
        },
        ...PLAYER_PARAMS,
    ];

    return (
        <div>
            <div className={styles.title}>{title}</div>
            <Table dataSource={players} columns={columns} pagination={false} className={styles.table}/>
        </div>
    );
};
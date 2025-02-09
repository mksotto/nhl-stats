import {FC} from "react";
import {Flex, Table, TableProps, Image} from "antd";
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
                    <Image src={player.headshot}  style={{ borderRadius: '50%', width: 50, height: 50 }} />
                    <div onClick={() => {navigate(`/player/${player.id}`)}} style={{fontSize: 16, fontWeight: 600}}>
                        {player.firstName.default} {player.lastName.default}
                    </div>
                </Flex>),
        },
        ...PLAYER_PARAMS,
    ];

    return (
        <div>
            <div className={styles.title}>{title}</div>
            <Table dataSource={players} columns={columns} pagination={false}/>
        </div>
    );
};
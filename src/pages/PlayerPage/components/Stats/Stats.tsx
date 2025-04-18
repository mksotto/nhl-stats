import { Flex, Tabs } from "antd";
import { FC } from "react";
import styles from './Stats.module.css';
import { StatsCareer } from "./StatsCareer/StatsCareer";
import { GameLogs } from "./GameLogs/GameLogs";
import {useParams} from "react-router-dom";
import {usePlayersId} from "../../../../queries/players/usePlayersId.ts";

export const Stats: FC = () => {
    const {id} = useParams();
    const {data: player} = usePlayersId(Number(id));
    if (!player) return;
    const options = [
        {
            label: 'Career',
            key: 'career',
            children: <StatsCareer player={player} />,
        },
        {
            label: 'Game Logs',
            key: 'gameLogs',
            children: <GameLogs id={Number(id)} position={player.position} />,
        }
    ]

    return (
        <Flex className={styles.container}>
            <Flex className={styles.title}>STATS</Flex>
            <Tabs
                defaultActiveKey='career'
                centered
                items={options}
                style={{width: '100%'}}
            />
        </Flex>
    )
}
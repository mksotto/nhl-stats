import { Flex, Tabs } from "antd";
import { FC } from "react";
import styles from './Stats.module.css';
import { StatsCareer } from "./StatsCareer/StatsCareer";
import { GameLogs } from "./GameLogs/GameLogs";
import {PlayerAdvanced} from "../../../../types/domain/nhl-stats.ts";

type Props = {
    player: PlayerAdvanced,
    id: number,
}

export const Stats: FC<Props> = ({player, id}) => {
    const options = [
        {
            label: 'Career',
            key: 'career',
            children: <StatsCareer player={player} />,
        },
        {
            label: 'Game Logs',
            key: 'gameLogs',
            children: <GameLogs id={id} position={player.position} />,
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
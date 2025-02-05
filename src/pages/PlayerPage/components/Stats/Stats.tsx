import { Flex, Tabs } from "antd";
import { FC } from "react";
import styles from './Stats.module.css';
import { StatsCareer } from "./StatsCareer/StatsCareer";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
import { GameLogs } from "./GameLogs/GameLogs";

type Props = {
    player: PlayerPlayerIdLandingGet,
    playerId: number,
}

export const Stats: FC<Props> = ({player, playerId}) => {
    const options = [
        {
            label: 'Career',
            key: 'career',
            children: <StatsCareer player={player} />,
        },
        {
            label: 'Game Logs',
            key: 'gameLogs',
            children: <GameLogs playerId={playerId} position={player.position} />,
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
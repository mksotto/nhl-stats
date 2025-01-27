import { Flex, Tabs } from "antd";
import { FC } from "react";
import styles from './Stats.module.css';
import { StatsCareer } from "./StatsCareer/StatsCareer";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
import { GameLogs } from "./GameLogs/GameLogs";
import { PlayerPlayerIdGameLogGet } from "../../../../types/playerPlayerIdGameLogGet";

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
            children: <GameLogs playerId={playerId} />,
        }
    ]

    return (
        <Flex vertical align="center">
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
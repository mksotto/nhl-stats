import { Flex, Tabs } from "antd";
import { FC } from "react";
import styles from './Stats.module.css';
import { StatsCareer } from "./StatsCareer/StatsCareer";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";

type Props = {
    player: PlayerPlayerIdLandingGet
}

export const Stats: FC<Props> = ({player}) => {
    const options = [
        {
            label: 'Career',
            key: 'career',
            children: <StatsCareer player={player} />,
        },
        {
            label: 'Game Logs',
            key: 'gameLogs',
            children: 'Tab2',
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
                // activeKey={currentTab}
                // onChange={setCurrentTab}
            />
        </Flex>
    )
}
import { FC } from "react";
import {Card, Flex, Typography} from "antd";
import styles from './LeaderStats.module.css'
import { LeaderPlayers } from "./components/LeaderPlayers/LeaderPlayers.tsx";

export const LeaderStats: FC = () => (
    <Flex justify="center">
        <Card className={styles.layout} title={<Typography.Title className={styles.title}>Statistics</Typography.Title>}>
            <Flex className={styles.container}>
                <LeaderPlayers skater />
                <LeaderPlayers skater />
                <LeaderPlayers goalie />
                <LeaderPlayers goalie />
            </Flex>
        </Card>
    </Flex>
);
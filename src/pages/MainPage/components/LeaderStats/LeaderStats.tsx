import { FC } from "react";
import { Card, Flex } from "antd";
import styles from './LeaderStats.module.css'
import { LeaderPlayers } from "./components/LeaderPlayers/LeaderPlayers.tsx";
import {LeaderPlayerTitle} from "./components/LeaderPlayerTitle/LeaderPlayerTitle.tsx";

export const LeaderStats: FC = () => {
    
    return (
        <Flex justify="center">
            <Card className={styles.layout} title={<LeaderPlayerTitle />}>
                <Flex className={styles.container}>
                    <LeaderPlayers skater />
                    <LeaderPlayers skater />
                    <LeaderPlayers goalie />
                    <LeaderPlayers goalie />
                </Flex>
            </Card>
        </Flex>
    )
}
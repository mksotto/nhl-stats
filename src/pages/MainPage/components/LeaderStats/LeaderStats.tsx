import { FC } from "react";
import { Card, Flex } from "antd";
import styles from './LeaderStats.module.css'
import { LeaderPlayers } from "./components/LeaderPlayers.tsx";

export const LeaderStats: FC = () => {
    
    return (
        <Flex justify="center">
            <Card className={styles.layout}>
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
import { FC } from "react";
import { Card, Flex } from "antd";
import styles from './LeaderStats.module.css'
import { LeaderSkaters } from "./components/LeaderSkaters/LeaderSkaters";
import { LeaderGoalies } from "./components/LeaderGoalies/LeaderGoalies";

export const LeaderStats: FC = () => {
    
    return (
        <Flex justify="center">
            <Card className={styles.layout}>
                <Flex className={styles.container}>
                    <LeaderSkaters />
                    <LeaderGoalies />
                    <LeaderSkaters />
                    <LeaderGoalies />
                </Flex>
            </Card>
        </Flex>
    )
}
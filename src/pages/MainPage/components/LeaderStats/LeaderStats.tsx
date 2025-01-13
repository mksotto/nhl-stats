import { FC } from "react";
import { Card } from "antd";
import styles from './LeaderStats.module.css'
import { LeaderSkaters } from "./components/LeaderSkaters/LeaderSkaters";
import { LeaderGoalies } from "./components/LeaderGoalies/LeaderGoalies";

export const LeaderStats: FC = () => {
    
    return (
        <>
            <Card>
                <div className={styles.container}>
                    <LeaderSkaters />
                    <LeaderGoalies />
                    <LeaderSkaters />
                    <LeaderGoalies />
                </div>
            </Card>
        </>
    )
}
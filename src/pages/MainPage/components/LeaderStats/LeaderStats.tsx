import { FC } from "react";
import { Card } from "antd";
import styles from './LeaderStats.module.css'
import { LeaderSkaters } from "./components/LeaderSkaters/LeaderSkaters";

export const LeaderStats: FC = () => {
    
    return (
        <>
            <Card>
                <div className={styles.container}>
                    <LeaderSkaters />
                </div>
            </Card>
            <div>пРИВЕТ</div>
        </>
    )
}
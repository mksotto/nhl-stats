import {FC} from "react";
import {Typography} from "antd";
import styles from './LeaderPlayerTitle.module.css'


export const LeaderPlayerTitle: FC = () => {

    return (
        <Typography.Title className={styles.title}>Statistics</Typography.Title>
    )
}
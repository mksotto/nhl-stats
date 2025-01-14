import { FC } from "react";
import { LeaderPlayer } from "../../types/base";
import { Flex } from "antd";
import styles from './playerItem.module.css'

type Props = {
    player: LeaderPlayer;
    keyOfItem: number;
}

export const PlayerItem: FC<Props> = ({player, keyOfItem}) => {


    return (
    <>
        {/* <Flex gap={8} justify="space-between" align="center" className={styles.skatersTable}>
            <Flex gap={8} align="center" className={styles.info}>
                <div className={styles.index}>{`${keyOfItem}.`}</div>
                <div className={styles.name}>
                    {skater.firstName.default} {skater.lastName.default}
                </div>
            </Flex>
            <Flex align="center" className={styles.info}>
                <div className={styles.value}>{skater.value}</div>
            </Flex>
        </Flex> */}

        <Flex className={styles.skatersTable}>
                <Flex gap={8} justify="space-between" align="center" className={styles.padding}>
                    <div className={styles.index}>{`${keyOfItem}.`}</div>
                    <div className={styles.name}>
                        {player.firstName.default} {player.lastName.default}
                    </div>
                    <div className={styles.value}>{player.value}</div>
                </Flex>
        </Flex>
    </>
    )
}
import { FC } from "react";
import { LeaderPlayer } from "../../types/base";
import { Flex } from "antd";
import styles from './playerItem.module.css'
import cx from 'classnames'

type Props = {
    player: LeaderPlayer;
    keyOfItem: number;
    active: boolean;
    onMouseEnter: React.MouseEventHandler<HTMLElement>
}

export const PlayerItem: FC<Props> = ({player, keyOfItem, active, onMouseEnter}) => {

    return (
        <Flex onMouseEnter={onMouseEnter} className={cx(styles.skatersTable, {
                [styles.skatersTableActive]: active
            })}>
            <Flex gap={8} justify="space-between" align="center" className={styles.padding}>
                <div className={styles.index}>{`${keyOfItem}.`}</div>
                <div className={styles.name}>
                    {player.firstName.default} {player.lastName.default}
                </div>
                <div className={styles.value}>{player.value}</div>
            </Flex>
        </Flex>
    )
}
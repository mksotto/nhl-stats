import React, {FC} from "react";
import {LeaderPlayer} from "../../../../../../types/base.ts";
import { Flex } from "antd";
import styles from './PlayersListItem.module.css'
import cx from 'classnames'
import {PlayerStatsLeadersGet} from "../../../../../../types/playerStatsLeadersGet.ts";
import {curatedPlayer} from "../../utils/cureatedPlayer.ts";

type Props = {
    player: LeaderPlayer,
    keyOfItem: number,
    active: boolean,
    onMouseEnter: React.MouseEventHandler<HTMLElement>,
    currentTab: keyof PlayerStatsLeadersGet,
}

export const PlayersListItem: FC<Props> = ({player, keyOfItem, active, onMouseEnter, currentTab}) => {

    const playerModified = curatedPlayer(player, currentTab)

    return (
        <Flex onMouseEnter={onMouseEnter} className={cx(styles.skatersTable, {
                [styles.skatersTableActive]: active
            })}>
            <Flex gap={8} justify="space-between" align="center" className={styles.padding}>
                <div className={styles.index}>{`${keyOfItem}.`}</div>
                <div className={styles.name}>
                    {playerModified.firstName.default} {playerModified.lastName.default}
                </div>
                <div className={styles.value}>{playerModified.value}</div>{/*проверить как работает округление значений*/}
            </Flex>
        </Flex>
    )
}
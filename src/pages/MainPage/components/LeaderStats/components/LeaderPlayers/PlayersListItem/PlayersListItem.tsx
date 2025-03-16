import {FC} from "react";
import styles from './PlayersListItem.module.css'
import cx from 'classnames'
import {Leader} from "../../../../../../../types/domain/nhl-stats.ts";

type Props = {
    player: Leader,
    keyOfItem: number,
    active: boolean,
    onMouseEnter: () => void,
};

export const PlayersListItem: FC<Props> = ({player, keyOfItem, active, onMouseEnter}) => (
    <div
        onMouseEnter={onMouseEnter}
        className={cx(styles.skatersTable, {
            [styles.skatersTableActive]: active
        })}
    >
        <div className={styles.index}>{`${keyOfItem}.`}</div>
        <div className={styles.name}>{player.name}</div>
        <div className={styles.value}>{player.value}</div>
    </div>
);
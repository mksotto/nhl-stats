import {FC} from "react";
import {Flex} from "antd";
import {Player} from "../../../../types/rosterTeamSeason.ts";
import styles from './RosterItem.module.css'

type Props = {
    title: string;
    players: Player[];
}

export const RosterItem: FC<Props> = ({title, players}) => (
    <div>
        <div className={styles.title}>{title}</div>
        {players.map((player) => (
            <Flex gap={4}>
                <div>{player.firstName.default}</div>
                <div>{player.lastName.default}</div>
                <div>{player.sweaterNumber}</div>
            </Flex>
        ))}
    </div>
)
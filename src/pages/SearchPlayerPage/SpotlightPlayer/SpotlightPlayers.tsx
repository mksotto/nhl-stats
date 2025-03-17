import { FC } from "react";
import { Flex } from "antd";
import {Player} from "../../../types/domain/nhl-stats.ts";
import styles from './SpotlightPlayers.module.css'

type Props = {
    player: Player;
    onClick: () => void;
};

export const SpotlightPlayers: FC<Props> = ({player, onClick}) => (
    <Flex className={styles.playerCard} onClick={onClick}>
        <img src={player.headshot} className={styles.headshot} alt='headshot' />
        <Flex vertical justify="center" gap={14}>
            <div className={styles.name}>{player.name}</div>
            <Flex gap={4}>
                <img src={player.currentTeam?.logo!} className={styles.teamLogo} alt='logo'/>
                <div className={styles.description}>{player.currentTeam?.abbrev}</div>
                <div className={styles.description}>•</div>
                <div className={styles.description}>{`#${player.sweaterNumber}`}</div>
                <div className={styles.description}>•</div>
                <div className={styles.description}>{player.position}</div>
            </Flex>
        </Flex>
    </Flex>
);
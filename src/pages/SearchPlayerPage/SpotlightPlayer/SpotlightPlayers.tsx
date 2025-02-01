import { FC } from "react";
import { PlayerSpotlightGet } from "../../../types/playerSpotlightGet";
import { Flex } from "antd";
import styles from './SpotlightPlayers.module.css'

type Props = {
    player: PlayerSpotlightGet;
    onClick: React.MouseEventHandler<HTMLElement>
}

export const SpotlightPlayers: FC<Props> = ({player, onClick}) => {
   
    return (
        <Flex className={styles.playerCard} onClick={onClick}>
            <img src={player.headshot} className={styles.headshot} alt='' />
            <Flex vertical justify="center" gap={14}>
                <div className={styles.name}>{player.name.default}</div>
                <Flex gap={4}>
                    <img src={player.teamLogo} className={styles.teamLogo} alt='' />
                    <div className={styles.description}>{player.teamTriCode}</div>
                    <div className={styles.description}>•</div>
                    <div className={styles.description}>{`#${player.sweaterNumber}`}</div>
                    <div className={styles.description}>•</div>
                    <div className={styles.description}>{player.position}</div>
                </Flex>
            </Flex>
        </Flex>
    )
} 
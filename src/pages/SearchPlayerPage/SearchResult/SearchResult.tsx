import { FC } from "react";
import { Flex } from "antd";
import { SearchPlayerGet } from "../../../types/searchPlayerGet";
import styles from './SearchResult.module.css';

type Props = {
    player: SearchPlayerGet;
    onClick: React.MouseEventHandler<HTMLElement>
}

export const SearchResult: FC<Props> = ({player, onClick}) => {
   
    return (
        <Flex className={styles.playerCard} onClick={onClick}>
            <img src={`https://assets.nhle.com/mugs/nhl/latest/${player.playerId}.png`} className={styles.headshot} /> 
            <Flex vertical justify="center" gap={14}>
                <div className={styles.name}>{player.name}</div>
                <Flex gap={4}>
                    <img src={(player.teamAbbrev ? `https://assets.nhle.com/logos/nhl/svg/${player.teamAbbrev}_light.svg` : `https://assets.nhle.com/logos/nhl/svg/${player.lastTeamAbbrev}_light.svg`)} className={styles.teamLogo} />
                    <div className={styles.description}>{(player.teamAbbrev ? player.teamAbbrev : player.lastTeamAbbrev)}</div>
                    <div className={styles.description}>•</div>
                    <div className={styles.description}>{`#${player.sweaterNumber}`}</div>
                    <div className={styles.description}>•</div>
                    <div className={styles.description}>{player.positionCode}</div>
                </Flex>
            </Flex>
        </Flex>
    )
} 
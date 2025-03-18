import { FC } from "react";
import { Flex } from "antd";
import {SearchPlayer} from "../../../types/domain/nhl-stats.ts";
import styles from './SearchResult.module.css';

type Props = {
    player: SearchPlayer;
    onClick: () => void;
};

export const SearchResult: FC<Props> = ({player, onClick}) => (
    <Flex className={styles.playerCard} onClick={onClick}>
        <img src={player.headshot} alt="headshot" className={styles.headshot}/>
        <Flex vertical justify="center" gap={14}>
            <div className={styles.name}>{player.name}</div>
            <Flex gap={4} className={styles.description}>
                {(player.currentTeam || player.lastTeam) && (
                    <>
                        <img
                            src={player.currentTeam?.logo || player.lastTeam?.logo || undefined}
                            alt='team logo'
                            className={styles.teamLogo}
                        />
                        <div>{player.currentTeam?.abbrev || player.lastTeam?.abbrev}</div>
                        <div>•</div>
                        {player.sweaterNumber && (
                            <>
                                <div>#{player.sweaterNumber}</div>
                                <div>•</div>
                            </>
                        )}
                        <div>{player.position}</div>
                    </>
                )}
            </Flex>
        </Flex>
    </Flex>
)
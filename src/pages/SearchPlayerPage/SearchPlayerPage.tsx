import { FC, useEffect, useState } from "react";
import { playerSpotlightGet } from "../../api/api-web.nhle/playerSpotlightGet";
import { PlayerSpotlightGet } from "../../types/playerSpotlightGet";
import { Card, Flex, Input } from "antd";
import { SpotlightPlayers } from "./SpotlightPlayer/SpotlightPlayers";
import { useNavigate } from "react-router-dom";
import styles from './SearchPlayerPage.module.css'
import { useSearchPlayer } from "../../queries/useSearchPlayer";
import { useDebounce } from "@uidotdev/usehooks";
import { SearchResult } from "./SearchResult/SearchResult";

export const SearchPlayerPage: FC = () => {
    const navigate = useNavigate();
    const [spotlightPlayer, setSpotlightPlayer] = useState<PlayerSpotlightGet[]>()
    useEffect(() => {
        try {
            playerSpotlightGet().then(r => setSpotlightPlayer( [...r].sort((a, b) => {
                if (a.sortId < b.sortId) {
                    return -1;
                }
                if (a.sortId > b.sortId) {
                    return 1;
                }
                return 0;
            })))
        } catch (e) {
            console.error(e)
        }
    }, [])
    const [searchPlayer, setSearchPlayer] = useState<string>('');
    const debounceSearch = useDebounce(searchPlayer, 500);

    const {data: players} = useSearchPlayer(debounceSearch)
    
    return (
        <Flex justify="center">
            <Card className={styles.layout}>
                <Input
                    className={styles.inputPlayer}
                    size="large"
                    value={searchPlayer}
                    onChange={(e) => setSearchPlayer(e.target.value)}
                />
                <div className={styles.playersCard}>
                    {(players 
                        ? players?.map((player) => (
                            <SearchResult 
                                key={player.playerId}
                                player={player}
                                onClick={() => {navigate(`/player/${player.playerId}`)}}
                            />
                        )) 
                        : spotlightPlayer?.map((player) => (
                            <SpotlightPlayers 
                                key={player.playerId}
                                player={player}
                                onClick={() => {navigate(`/player/${player.playerId}`)}}
                            />
                        ))
                    )}                    
                </div>
            </Card>
        </Flex>
    )
}
import { FC, useEffect, useState } from "react";
import { playerSpotlightGet } from "../../api/api-web.nhle/playerSpotlightGet";
import { PlayerSpotlightGet } from "../../types/playerSpotlightGet";
import { Card, Flex, Input } from "antd";
import { SearchResult } from "./SearchResult/SearchResult";
import { useNavigate } from "react-router-dom";
import styles from './SearchPlayerPage.module.css'

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

    console.log(spotlightPlayer)
    return (
        <Flex justify="center">
            <Card className={styles.layout}>
                <Input.Search className={styles.inputPlayer} />
                <div className={styles.playersCard}>
                    {spotlightPlayer?.map((player) => (
                        <SearchResult 
                            key={player.playerId}
                            player={player}
                            onClick={() => {navigate(`/player/${player.playerId}`)}}
                        />
                    )
                    )}
                </div>
            </Card>
        </Flex>
    )
}
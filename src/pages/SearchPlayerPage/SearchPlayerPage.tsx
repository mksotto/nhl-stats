import { FC, useState } from "react";
import {Card, Checkbox, Flex, Input} from "antd";
import { SpotlightPlayers } from "./SpotlightPlayer/SpotlightPlayers";
import { useNavigate } from "react-router-dom";
import styles from './SearchPlayerPage.module.css'
import { useDebounce } from "@uidotdev/usehooks";
import { SearchResult } from "./SearchResult/SearchResult";
import {usePlayersSearchName} from "../../queries/players/usePlayersSearchName.ts";
import {usePlayersSpotlight} from "../../queries/players/usePlayersSpotlight.ts";

export const SearchPlayerPage: FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<boolean>(true);
    const [searchPlayer, setSearchPlayer] = useState<string>('');
    const debounceSearch = useDebounce(searchPlayer, 500);
    const {data: spotlightPlayer} = usePlayersSpotlight();
    const {data: players} = usePlayersSearchName(debounceSearch, active);
    return (
        <Flex justify="center">
            <Card className={styles.layout}>
                <Input
                    className={styles.inputPlayer}
                    size="large"
                    value={searchPlayer}
                    onChange={(e) => setSearchPlayer(e.target.value)}
                    suffix={<Checkbox checked={active} onChange={(e) => setActive(e.target.checked)}>Active</Checkbox>}
                />
                <div className={styles.playersCard}>
                    {(players 
                        ? players?.map((player) => (
                            <SearchResult 
                                key={player.id}
                                player={player}
                                onClick={() => {navigate(`/players/${player.id}`)}}
                            />
                        )) 
                        : spotlightPlayer?.map((player) => (
                            <SpotlightPlayers 
                                key={player.id}
                                player={player}
                                onClick={() => {navigate(`/players/${player.id}`)}}
                            />
                        ))
                    )}                    
                </div>
            </Card>
        </Flex>
    )
}
import { FC, useEffect, useState } from "react";
import { playerSpotlightGet } from "../../api/api-web.nhle/playerSpotlightGet";
import { PlayerSpotlightGet } from "../../types/playerSpotlightGet";
import { Card, Flex, Input, List } from "antd";
import { SearchResult } from "./SearchResult";
import { useNavigate } from "react-router-dom";

export const SearchPlayerPage: FC = () => {
    const navigate = useNavigate();
    const [spotlightPlayer, setSpotlightPlayer] = useState<PlayerSpotlightGet[]>()
    useEffect(() => {
        playerSpotlightGet().then(r => setSpotlightPlayer( [...r].sort((a, b) => {
            if (a.sortId < b.sortId) {
                return -1;
            }
            if (a.sortId > b.sortId) {
                return 1;
            }
            return 0;
        })))
    }, [])

    console.log(spotlightPlayer)
    return (
        <Flex vertical>
            <Input.Search />
            <Card>
                <List>
                    {spotlightPlayer?.map((player) => (
                        <SearchResult 
                            key={player.playerId}
                            player={player}
                            onClick={()=>{}/*() => {navigate(`/player/${player.playerId}`)}*/}
                        />
                    )
                    )}
                </List>
            </Card>
        </Flex>
    )
}
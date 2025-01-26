import { Card, Flex } from "antd";
import { FC, useEffect, useState } from "react";
import { playerPlayerIdLandingGet } from "../../api/api-web.nhle/playerPlayerIdLandingGet";
import { PlayerPlayerIdLandingGet } from "../../types/playerPlayerIdLandingGet";
import styles from './PlayerPage.module.css'
import { useParams } from "react-router-dom";
import { PlayerCharacteristics } from "./components/PlayerCharacteristics/PlayerCharacteristics";
import { FeaturedStats } from "./components/FeaturedStats/FeaturedStats";
import { CardTitle } from "./components/CardTitle/CardTitle";
import { Last5Games } from "./components/Last5Games/Last5Games";
import { Stats } from "./components/Stats/Stats";
import { contentEnUsPlayersGet } from "../../api/forge-dapi.d3.nhle/contentEnUsPlayersGet";
import { ContentEnUsPlayersGet } from "../../types/contentEnUsPlayersGet";
import { Description } from "./components/Description/Description";


export const PlayerPage: FC = () => {
    
    const playerId = Number(useParams().playerId);
    const [player, setPlayer] = useState<PlayerPlayerIdLandingGet>();
    const [description, setDescription] = useState<ContentEnUsPlayersGet>()
    useEffect(() => {
        try {
            playerPlayerIdLandingGet(playerId).then(r => setPlayer(r))
            contentEnUsPlayersGet(playerId).then(r => setDescription(r))
        } catch (e) {
            console.error(e)
        }
    }, [playerId]);

    return (
        <Flex justify="center">
            <Card className={styles.layout} title={(<CardTitle player={player} playerId={playerId} />)}>
                <Flex vertical gap={24}>
                    <Flex style={{backgroundImage: `url(${player?.heroImage})`}} className={styles.heroImage}>
                        <Flex className={styles.playerDescription}>
                            <Flex className={styles.playerInfo}>
                                <img src={player?.headshot} className={styles.headShot} />
                                <PlayerCharacteristics player={player} />
                            </Flex>
                            {player && <FeaturedStats player={player} />}
                        </Flex>
                    </Flex>
                    {player && <Last5Games player={player} />}
                    {player && <Stats player={player} />}
                    {description && description.items[0].fields.biography && <Description description={description} />}
                </Flex>
            </Card>
        </Flex>
    )
}
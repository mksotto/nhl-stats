import { Card, Flex, Select } from "antd";
import { FC, useEffect, useState } from "react";
import { playerPlayerIdLandingGet } from "../../api/api-web.nhle/playerPlayerIdLandingGet";
import { PlayerPlayerIdLandingGet } from "../../types/playerPlayerIdLandingGet";
import styles from './PlayerPage.module.css'
import { useNavigate, useParams } from "react-router-dom";
import { PlayerCharacteristics } from "./components/PlayerCharacteristics/PlayerCharacteristics";
import { FeaturedStats } from "./components/FeaturedStats/FeaturedStats";
import { CardTitle } from "./components/CardTitle/CardTitle";

// создать константу в которой будут храниться нужные параметры с бека, записать необходимое отображение ex: 'plusMinus': '+/-', и пройтись сначала фильтром потом мапилкой при создании реакт компонента



export const PlayerPage: FC = () => {
    
    const playerId = Number(useParams().playerId);
    const [player, setPlayer] = useState<PlayerPlayerIdLandingGet>();
    useEffect(() => {
        try {
            playerPlayerIdLandingGet(playerId).then(r => setPlayer(r))
        } catch (e) {
            console.error(e)
        }
    }, [playerId]);

    return (
        <Flex justify="center">
            <Card className={styles.layout} title={(<CardTitle player={player} playerId={playerId} />)}>
                <Flex align="center" style={{backgroundImage: `url(${player?.heroImage})`}} className={styles.heroImage}>
                    <Flex gap={24} className={styles.playerDescription}>
                        <img src={player?.headshot} className={styles.headShot} />
                        <PlayerCharacteristics player={player} />
                        <FeaturedStats player={player} />
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    )
}
import { Card, Flex, Select } from "antd";
import { FC, useEffect, useState } from "react";
import { playerPlayerIdLandingGet } from "../../api/api-web.nhle/playerPlayerIdLandingGet";
import { PlayerPlayerIdLandingGet } from "../../types/playerPlayerIdLandingGet";
import styles from './PlayerPage.module.css'
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

// создать константу в которой будут храниться нужные параметры с бека, записать необходимое отображение ex: 'plusMinus': '+/-', и пройтись сначала фильтром потом мапилкой при создании реакт компонента

export const PlayerPage: FC = () => {
    const navigate = useNavigate();
    const playerId = Number(useParams().playerId);
    const [player, setPlayer] = useState<PlayerPlayerIdLandingGet>();
    useEffect(() => {
        try {
            playerPlayerIdLandingGet(playerId).then(r => setPlayer(r))
        } catch (e) {
            console.error(e)
        }
    }, [playerId]);
    const options = player?.currentTeamRoster?.map((otherPlayer) => ({
        label: `${otherPlayer?.firstName.default} ${otherPlayer?.lastName.default}`, 
        value: otherPlayer?.playerId
    }));
    const seasonString = String(player?.featuredStats?.season);

    return (
        <Flex justify="center">
            <Card 
                className={styles.layout} 
                title={(
                    <Flex justify="space-between">
                        <Flex className={styles.titleContainer}>
                            <div className={styles.titlePlayerInfo}>{`${player?.firstName.default} ${player?.lastName.default}`}</div>
                            <img src={player?.teamLogo} className={styles.titleTeamLogo}/>
                            <div className={styles.titlePlayerInfo}>{`#${player?.sweaterNumber}`}</div>
                            <div className={styles.titlePlayerInfo}>{`${player?.position}`}</div>
                        </Flex>
                        {player?.isActive && (
                            <Flex className={styles.titleContainer}>
                                <div>ROSTER</div>
                                <Select
                                    showSearch
                                    optionFilterProp="label"
                                    options={options}
                                    defaultValue={playerId}
                                    onChange={(value) => navigate(`/player/${value}`)}
                                    style={{ flex: '1 0' }}
                                    className={styles.selectRoster}
                                />
                            </Flex>
                        )}
                    </Flex>
                )}
            >
                <Flex align="center" style={{backgroundImage: `url(${player?.heroImage})`}} className={styles.heroImage}>
                    <Flex gap={24} className={styles.playerDescription}>
                        <img src={player?.headshot} className={styles.headShot}/>
                        <Flex vertical className={styles.playerCharacteristics}>
                            <Flex gap={8}>
                                <div className={styles.playerCharacteristicKey}>Height:</div>
                                <div>{`${player?.heightInCentimeters} cm`}</div>
                            </Flex>
                            <Flex gap={8}>
                                <div className={styles.playerCharacteristicKey}>Weight:</div>
                                <div>{`${player?.weightInKilograms} kg`}</div>
                            </Flex>
                            <Flex gap={8}>
                                <div className={styles.playerCharacteristicKey}>Birthdate:</div>
                                <div>{`${(player?.birthDate ? dayjs(player?.birthDate).format('DD MMMM YYYY') : '')}`}</div>
                                <div>{`(Age: ${(player?.birthDate ? new Date(Date.now() - Date.parse(player?.birthDate)).getFullYear() - 1970 : '')})`}</div>
                            </Flex>
                            <Flex gap={8}>
                                <div className={styles.playerCharacteristicKey}>Birthplace:</div>
                                <div>{`${player?.birthCity?.default}, ` + (player?.birthStateProvince ? `${player?.birthStateProvince.default}, ` : '') + `${player?.birthCountry}`}</div>
                            </Flex>
                            <Flex gap={8}>
                                <div className={styles.playerCharacteristicKey}>Draft:</div>
                                <div>{(player?.draftDetails ? `${player?.draftDetails?.year}, ${player?.draftDetails?.teamAbbrev} (${player?.draftDetails?.overallPick} overall), ${player?.draftDetails?.round} round, ${player?.draftDetails?.pickInRound} pick` : 'Undrafted')}</div>
                            </Flex>
                         </Flex>
                    </Flex>
                </Flex>
                <div>
                    <div>
                        <div>{`${seasonString.substring(0, 4)}-${seasonString.substring(6)}`} Season</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.gamesPlayed}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.goals}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.assists}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.points}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.subSeason.plusMinus}`}</div>
                    </div>
                    <div>
                        <div>{'Career'}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.gamesPlayed}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.goals}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.assists}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.points}`}</div>
                        <div>{`${player?.featuredStats?.regularSeason.career.plusMinus}`}</div>
                    </div>
                </div>
            </Card>
        </Flex>
    )
}
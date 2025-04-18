import { FC } from "react";
import { Flex, Select } from "antd";
import styles from './CardTitle.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {useIsLarge} from "../../../../hooks/mediaCheckers.ts";
import {usePlayersId} from "../../../../queries/players/usePlayersId.ts";

export const CardTitle: FC = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data: player} = usePlayersId(Number(id));
    const options = player?.currentTeamRoster?.map((otherPlayer) => ({
        label: otherPlayer.name,
        value: otherPlayer.id,
    }));

    const isLarge = useIsLarge();

    return (
        <Flex justify="space-between">
            <Flex className={styles.titleContainer}>
                <div className={styles.titlePlayerInfo}>{player?.name}</div>
                <Flex align='center' gap={8}>
                    {player?.currentTeam?.logo && <img src={player.currentTeam.logo} alt='logo' className={styles.titleTeamLogo}/>}
                    {player?.sweaterNumber && <div className={styles.titlePlayerInfo}>{`#${player?.sweaterNumber}`}</div>}
                    <div className={styles.titlePlayerInfo}>{player?.position}</div>
                </Flex>
            </Flex>
            {isLarge && player?.isActive && player?.currentTeamRoster && (
                <Flex className={styles.titleContainer}>
                    <div>ROSTER</div>
                    <Select
                        showSearch
                        optionFilterProp="label"
                        options={options}
                        defaultValue={player?.id}
                        size="large"
                        onChange={(id) => navigate(`/players/${id}`)}
                        style={{ flex: '1 0' }}
                        className={styles.selectRoster}
                    />
                </Flex>
            )}
        </Flex>
    )
}
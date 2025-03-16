import { FC } from "react";
import {Flex} from "antd";
import dayjs from "dayjs";
import styles from './PlayerCharacteristics.module.css';
import {PlayerInfo} from "../../../../types/domain/nhl-stats.ts";

type Props = {
    info: PlayerInfo | undefined,
    isActive: boolean | undefined,
}

export const PlayerCharacteristics: FC<Props> = ({info, isActive}) => {
    const playerInfo = {
        Height: `${info?.height} cm`,
        Weight: `${info?.weight} kg`,
        Birthdate: (info?.birth && `${dayjs(info.birth.date).format('DD MMMM YYYY')} ${(isActive ? `(Age: \u00A0${dayjs().diff(info.birth.date, 'year')})` : '')}`),
        Birthplace: `${info?.birth.city}, ` + (info?.birth.province ? `${info.birth.province}, ` : '') + `${info?.birth.country}`,
        Catches: info?.shootsCatches,
        Draft: (info?.draftDetails
        ? `
            ${info.draftDetails.year}, 
            ${info.draftDetails.teamAbbrev} 
            (${info.draftDetails.overallPick} overall), 
            ${info.draftDetails.round} round, 
            ${info.draftDetails.pickInRound} pick
        `
        : 'Undrafted'),
    };
    return (
        <div className={styles.playerCharacteristics}>
            {Object.entries(playerInfo).map(([key, value], id) => (
                <Flex gap={8} key={id}>
                    <div className={styles.playerCharacteristicKey}>{key}:</div>
                    <div>{value}</div>
                </Flex>
            ))}
        </div>
    );
};

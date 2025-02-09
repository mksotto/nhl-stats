import {FC, useEffect, useState} from "react";
import {Card, Flex} from "antd";
import styles from './TeamRosterPage.module.css';
import {useParams} from "react-router-dom";
import {rosterSeasonTeamGet} from "../../api/api-web.nhle/rosterSeasonTeamGet.ts";
import {useRosterTeamSeason} from "../../queries/useRosterTeamSeason.ts";
import {TeamRosterTitle} from "./components/TeamRosterTitle/TeamRosterTitle.tsx";
import {RosterItem} from "./components/RosterItem/RosterItem.tsx";

export const TeamRosterPage: FC = () => {

    const teamAbbrev = useParams().teamAbbrev!;

    const [seasons, setSeasons] = useState<number[]>();
    const [season, setSeason] = useState<number>();

    useEffect(() => {
        rosterSeasonTeamGet(teamAbbrev).then(r => {
            setSeasons(r);
            setSeason(r[r.length - 1]);
        });
    }, []);

    const {data: roster} = useRosterTeamSeason(teamAbbrev, season);

    if (!teamAbbrev || !seasons || !season) return;

    return (
        <Flex justify='center'>
            <Card title={<TeamRosterTitle seasons={seasons} season={season} setSeason={setSeason}/>} className={styles.layout}>
                <Flex vertical gap={32}>
                    {roster &&
                        <>
                            <RosterItem title='Forwards' players={roster.forwards}/>
                            <RosterItem title='Defensemen' players={roster.defensemen}/>
                            <RosterItem title='Goalies' players={roster.goalies}/>
                        </>
                    }
                </Flex>
            </Card>
        </Flex>
    );
}
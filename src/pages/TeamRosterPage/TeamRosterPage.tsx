import {FC, useEffect, useState} from "react";
import {Card, Flex} from "antd";
import styles from './TeamRosterPage.module.css';
import {useParams} from "react-router-dom";
import {TeamRosterTitle} from "./components/TeamRosterTitle/TeamRosterTitle.tsx";
import {RosterItem} from "./components/RosterItem/RosterItem.tsx";
import {useTeamsAbbrevRosterSeason} from "../../queries/teams/useTeamsAbbrevRosterSeason.ts";
import {useTeamsAbbrevSeasons} from "../../queries/teams/useTeamsAbbrevSeasons.ts";

export const TeamRosterPage: FC = () => {
    const abbrev = useParams().abbrev!;
    const [season, setSeason] = useState<number>();
    const {data: seasons, isLoading: isSeasonsLoading} = useTeamsAbbrevSeasons(abbrev);
    const {data: roster, isLoading: isRosterLoading} = useTeamsAbbrevRosterSeason(abbrev, season);
    useEffect(() => {
        if (seasons) {
            setSeason(seasons[seasons?.length - 1]);
        }
    }, [seasons]);
    return (
        <Flex justify='center'>
            <Card
                title={
                    <TeamRosterTitle
                        seasons={seasons}
                        season={season}
                        setSeason={setSeason}
                        loading={isSeasonsLoading}
                    />
                }
                className={styles.layout}
                loading={isRosterLoading}
            >
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
};
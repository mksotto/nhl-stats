import { FC } from "react";
import { PlayerPlayerIdLandingGet } from "../../../../types/playerPlayerIdLandingGet";
import { Flex, Statistic, Typography } from "antd";

type Props = {
    player: PlayerPlayerIdLandingGet | undefined
}

const FEATURED_STATS: Record<string, string> = {
    'gamesPlayed': 'GP',
    'goals': 'G',
    'assists': 'A',
    'points': 'P',
    'plusMinus': '+/-',
    'wins': 'W',
    'shutouts': 'SO',
    'goalsAgainstAvg': 'GAA',
    'savePctg': 'SV%',
};

export const FeaturedStats: FC<Props> = ({player}) => {

    const seasonString = String(player?.featuredStats?.season);

    const featuredStatsRegularSeason = Object.entries(player?.featuredStats?.regularSeason.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    const featuredStatsPlayoffSeason = Object.entries(player?.featuredStats?.playoffs?.subSeason || {}).filter((item) => FEATURED_STATS[item[0]])
    const featuredStatsRegularCareer = Object.entries(player?.featuredStats?.regularSeason.career || {}).filter((item) => FEATURED_STATS[item[0]])
    const featuredStatsPlayoffCareer = Object.entries(player?.featuredStats?.playoffs?.career || {}).filter((item) => FEATURED_STATS[item[0]])

    return(
        <Flex vertical gap={16}>
            <Flex gap={24}>
                <Flex align="center" style={{width: '100px'}}>{`${seasonString.substring(0, 4)}-${seasonString.substring(6)}`} Season</Flex>
                {featuredStatsRegularSeason.map(([key, value]) => (
                    <Flex justify="center" style={{width: '60px'}}>
                        <Statistic title={FEATURED_STATS[key]} value={value} />
                    </Flex>
                ))}
            </Flex>
            <Flex gap={24}>
                <Flex align="center" style={{width: '100px'}}>Career</Flex>
                {featuredStatsRegularCareer.map(([key, value]) => (
                    <Flex vertical justify="center" style={{width: '60px'}}>
                        <Typography.Text type='secondary' >{FEATURED_STATS[key]}</Typography.Text>
                        <Typography.Text>{value}</Typography.Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
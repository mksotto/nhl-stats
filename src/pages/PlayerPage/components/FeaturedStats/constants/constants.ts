export const FEATURED_STATS: Record<string, string> = {
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

export const FEATURED_STATS_PLAYER = [
    'gamesPlayed', 'goals', 'assists', 'points', 'plusMinus',
] as const;

export const FEATURED_STATS_GOALIES = [
    'gamesPlayed', 'wins', 'shutouts', 'goalsAgainstAvg', 'savePctg',
] as const;
export const SKATER_PARAMS = [
    {
        title: 'Season',
        dataIndex: 'season',
        render: (season: number) => `${String(season).substring(0, 4)}-${String(season).substring(6)}`,
    },
];

export const GOALIE_PARAMS = [
    {
        title: 'Season',
        dataIndex: 'season',
        render: (season: number) => `${String(season).substring(0, 4)}-${String(season).substring(6)}`,
    }
]
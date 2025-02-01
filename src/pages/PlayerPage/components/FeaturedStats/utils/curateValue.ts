export const curateValue = ([key, value]: [string, string | number | undefined]) => {
    if (key === 'savePctg') {
        return [
            key,
            Number(value).toFixed(3).replace(/^0\./, '.')
        ]
    }
    if (key === 'goalsAgainstAvg') {
        return [
            key,
            (Math.round(Number(value) * 100) / 100).toFixed(2)
        ]
    }
    return [key, value || 0]
}
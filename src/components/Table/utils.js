export const tableHeaderAndCoinKeyValue = [
    ['#', 'rank'],
    ['Coin', 'name'],
    ['Symbol', 'symbol'],
    ['Price', 'currentPrice'],
    ['24h', 'priceChangePercentage24h'],
    ['24h Volume', 'totalVolume24h'],
    ['Market Cap', 'marketCap']
]

export const formatPrice = price => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })
}

export const sortCoins = (arr, order, param) => {
   // console.log('sorting')
    const parameterKey = tableHeaderAndCoinKeyValue[param][1]
    return arr.sort((a, b) => {
        let item1 = a[parameterKey], item2 = b[parameterKey]

        if (typeof a[parameterKey] === 'string') {
            item1 = a[parameterKey].toLowerCase()
            item2 = b[parameterKey].toLowerCase()
        }

        if (order) {
            if (item1 > item2) return 1
            if (item1 < item2) return -1
            return 0
        } else {
            if (item1 > item2) return -1
            if (item1 < item2) return 1
            return 0
        }
    })
}
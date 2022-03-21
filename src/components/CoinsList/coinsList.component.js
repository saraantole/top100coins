import { useEffect, useState } from 'react'
import Loading from '../Loading/loading.component'
import Table from '../Table/table.component'
import { ListContainer } from './coinsList.style'

function CoinsList({ showFavourites, query }) {
    const [allCoins, setAllCoins] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
                const data = await response.json()
                const filteredData = data.map(item => {
                    const { id, market_cap_rank, name, image, symbol, current_price, price_change_percentage_24h, total_volume, market_cap } = item
                    return {
                        id,
                        rank: market_cap_rank,
                        name,
                        image,
                        symbol,
                        currentPrice: current_price,
                        priceChangePercentage24h: price_change_percentage_24h,
                        totalVolume24h: total_volume,
                        marketCap: market_cap
                    }
                })

                setAllCoins(filteredData)
                setLoading(false)
            } catch (e) {
                console.log(e)
                setLoading(false)
                setAllCoins(null)
            }
        }

        fetchCoins()
    }, [])

    return (
        <ListContainer>
            {
                loading ? <Loading /> : <Table allCoins={allCoins} showFavourites={showFavourites} query={query} />
            }
        </ListContainer>
    );
}

export default CoinsList;

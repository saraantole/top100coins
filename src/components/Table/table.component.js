import { useCallback, useEffect, useState } from 'react'
import FavouriteOnIcon from '../Icons/favouriteOn.component'
import FavouriteOffIcon from '../Icons/favouriteOff.component'
import SortingOrderIcon from '../Icons/sortingOrder.component'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { TableContainer, TableWrapper, StyledTable, Header, HeaderCell, Body, Row, Cell } from './table.style'
import Footer from '../PageFooter/footer.component'
import { sortCoins, formatPrice, tableHeaderAndCoinKeyValue } from './utils'


function Table({ showFavourites, query, allCoins }) {
    const [coins, setCoins] = useState(undefined)
    const [favourites, setFavourites] = useLocalStorage('favourites', {})
    const [sortParameter, setSortParameter] = useSessionStorage('sortParameter', 0)
    const [ascending, setAscending] = useSessionStorage('ascending', true)
    const [currentPage, setCurrentPage] = useSessionStorage('currentPage', 0)
    const [paginatedCoins, setPaginatedCoins] = useState(undefined)

    const toggleSorting = index => sortParameter === index ? setAscending(!ascending) : setSortParameter(index)

    const toggleFavourite = symbol => {
        if (favourites[symbol]) {
            let updatedFavourites = { ...favourites }
            delete updatedFavourites[symbol]
            setFavourites(updatedFavourites)
        } else {
            setFavourites({ ...favourites, [symbol]: true })
        }
    }

    const changePage = useCallback(newPage => setCurrentPage(newPage), [currentPage])

    useEffect(() => {
        if (coins) {
            const paginatedItems = []
            const sortedCoins = sortCoins(coins, ascending, sortParameter)
            const itemsPerPage = 10

            if (coins.length > itemsPerPage) {
                for (let i = 0; i < sortedCoins.length; i += itemsPerPage) {
                    const page = sortedCoins.slice(i, i + itemsPerPage)
                    paginatedItems.push(page)
                }

                // console.log('paginating')
                setPaginatedCoins(paginatedItems)
            } else {
                setPaginatedCoins([sortedCoins])
            }
        }
    }, [coins, sortParameter, ascending])

    useEffect(() => {
        // console.log('filtering')
        if (allCoins) {
            setCurrentPage(0)
            
            if (showFavourites) {
                const favouriteCoins = allCoins.filter(coin => favourites[coin.symbol])

                if (query) {
                    const searchMatches = favouriteCoins.filter(coin =>
                        coin.name.toLowerCase().includes(query.toLowerCase())
                        || coin.symbol.includes(query.toLowerCase()))
                    setCoins(searchMatches)
                } else {
                    setCoins(favouriteCoins)
                }
            } else {
                if (query) {
                    const searchMatches = allCoins.filter(coin =>
                        coin.name.toLowerCase().includes(query.toLowerCase())
                        || coin.symbol.includes(query.toLowerCase()))
                    setCoins(searchMatches)
                } else {
                    setCoins(allCoins)
                }
            }
        }

    }, [allCoins, showFavourites, query, favourites])


    return (
        <TableContainer>
            <TableWrapper>
                <StyledTable>
                    <Header>
                        <tr>
                            {
                                tableHeaderAndCoinKeyValue.map((title, index) =>
                                    <HeaderCell key={index} onClick={() => toggleSorting(index)}>
                                        {title[0]} {sortParameter === index && <SortingOrderIcon order={ascending} />}
                                    </HeaderCell>
                                )
                            }
                        </tr>
                    </Header>
                    <Body>
                        {
                            paginatedCoins?.length &&
                            <>
                                {paginatedCoins[currentPage].map(coin => {
                                    const { id, rank, image, name, symbol, currentPrice, priceChangePercentage24h, totalVolume24h, marketCap } = coin

                                    return (
                                        <Row key={id}>
                                            <Cell>
                                                <button onClick={() => toggleFavourite(symbol)}>
                                                    {favourites[symbol] ? <FavouriteOnIcon /> : <FavouriteOffIcon />}
                                                </button>
                                                {rank}
                                            </Cell>
                                            <Cell><img src={image} height='20' alt={`${symbol} logo`} /> {name}</Cell>
                                            <Cell>{symbol}</Cell>
                                            <Cell>{formatPrice(currentPrice)}</Cell>
                                            <Cell style={{ color: priceChangePercentage24h < 0 ? '#ED5565' : '#57BD0F' }}>
                                                {priceChangePercentage24h.toFixed(1)}%
                                            </Cell>
                                            <Cell>{formatPrice(totalVolume24h)}</Cell>
                                            <Cell>{formatPrice(marketCap)}</Cell>
                                        </Row>
                                    )
                                })}
                            </>
                        }
                        {!coins?.length && <tr><td style={{ position: 'absolute', padding: '40px' }}>No results found.</td></tr>}
                    </Body>
                </StyledTable>
            </TableWrapper>
            <Footer totalPages={paginatedCoins?.length} currentPage={currentPage} changePage={changePage} />
        </TableContainer>
    );
}

export default Table;

import { useCallback } from 'react';
import { useSessionStorage } from '../../hooks/useSessionStorage'
import CoinsList from '../CoinsList/coinsList.component';
import Favourites from '../Favourites/favourites.component';
import SearchBar from '../SearchBar/searchBar.component';
import { Container, Header } from './main.style'

function Main() {
    const [showFavourites, setShowFavourites] = useSessionStorage('showFavourites', false)
    const [query, setQuery] = useSessionStorage('query', '')

    const toggleShowFavourites = useCallback(() => setShowFavourites(!showFavourites), [showFavourites])

    const handleQuery = useCallback(value => setQuery(value), [query])

    return (
        <Container>
            <Header>
                <Favourites showFavourites={showFavourites} toggleShowFavourites={toggleShowFavourites} />
                <SearchBar query={query} handleQuery={handleQuery} />
            </Header>
            <CoinsList query={query} showFavourites={showFavourites} />
        </Container>
    );
}

export default Main;

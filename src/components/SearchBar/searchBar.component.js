import { memo } from 'react'
import { Input } from './searchBar.style'

function SearchBar({ query, handleQuery }) {
    return (
        <Input
            type='text'
            value={query}
            onChange={e => handleQuery(e.target.value)}
            placeholder='Search by name or symbol...' />
    );
}

export default memo(SearchBar);
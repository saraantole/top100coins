import FavouriteOnIcon from "../Icons/favouriteOn.component";
import FavouriteOffIcon from "../Icons/favouriteOff.component";
import { memo } from 'react'
import { Toggle } from './favourites.style';

function Favourites({ showFavourites, toggleShowFavourites }) {
    return (
        <Toggle active={showFavourites} onClick={toggleShowFavourites}>
            {showFavourites ? <FavouriteOnIcon /> : <FavouriteOffIcon />}
        </Toggle>
    );
}

export default memo(Favourites);
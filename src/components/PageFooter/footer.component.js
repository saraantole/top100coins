import FirstPage from '../Icons/firstPage.component'
import LastPage from '../Icons/lastPage.component'
import Forward from '../Icons/forward.component'
import Back from '../Icons/back.component'
import { FooterContainer } from './footer.style'
import { memo } from 'react'

function Footer({ currentPage, changePage, totalPages }) {
    return (
        <FooterContainer>
            <button disabled={currentPage === 0} onClick={() => changePage(0)}>
                <FirstPage color={currentPage === 0 ? 'grey' : 'black'} />
            </button>
            <button disabled={currentPage === 0} onClick={() => changePage(currentPage => currentPage - 1)}>
                <Back color={currentPage === 0 ? 'grey' : 'black'} />
            </button>
            <span>Page {currentPage + 1} / {totalPages}</span>
            <button disabled={currentPage === totalPages - 1} onClick={() => changePage(currentPage => currentPage + 1)}>
                <Forward color={currentPage === totalPages - 1 ? 'grey' : 'black'} />
            </button>
            <button disabled={currentPage === totalPages - 1} onClick={() => changePage(totalPages - 1)}>
                <LastPage color={currentPage === totalPages - 1 ? 'grey' : 'black'} />
            </button>
        </FooterContainer>
    );
}

export default memo(Footer)
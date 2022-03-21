import styled from 'styled-components';

export const TableContainer = styled.section`
    position: relative;
    height: 100%;
`

export const TableWrapper = styled.div`
    overflow-x: auto;
    padding: 0 30px 40px 30px;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const StyledTable = styled.table`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
`;

export const Header = styled.thead`
    border-radius:  ${({theme}) => theme.borderRadius};
    box-shadow:  ${({theme}) => theme.shadowOut};
`

export const Body = styled.tbody`
    border-radius:  ${({theme}) => theme.borderRadius};
    box-shadow:  ${({theme}) => theme.shadowIn};
`

export const HeaderCell = styled.th`
    padding: 15px 0;
    text-align: center;
    position: relative;

    svg {
        position: absolute;
        margin-top: -5px;
    }

    :first-of-type {
        width: 8%;
    }

    :nth-of-type(2), :nth-of-type(3) {
        text-align: left;
    }

    @media (min-width: 1250px) {
        :nth-of-type(2), :nth-of-type(3) {
            width: 20%; 
        }
    }

    @media (max-width: 930px) {
        width: 150px; 

        :first-of-type {
            width: 60px;
        }

        :nth-of-type(3) {
            width: 50px;
            text-align: left;
        }
    }

`;

export const Row = styled.tr`
    border-top: 1px solid #ddd;

    :first-of-type {
        border: none;
    }
`

export const Cell = styled.td`
    height: 52px;
    font-size: ${({theme}) => theme.fontSizes.medium};
    text-align: center;

    :first-of-type { 
        position: relative;
        text-align: left;
        padding-left: 40px;
    }


    :nth-of-type(2) {
        position: relative;
        text-align: left;
        padding-left: 40px;
        font-weight: bold;
    }

    :nth-of-type(3)  {
        font-size: ${({theme}) => theme.fontSizes.small};
        text-align: left;
        text-transform: uppercase;
    }

    svg, img {
        position: absolute;
        left: 5px;
        top: 14px;
    }

    svg:hover {
        cursor: pointer;
    }
`;


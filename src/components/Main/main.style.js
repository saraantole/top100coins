import styled from 'styled-components';

export const Container = styled.main`
    background: #E4EBF5;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: ${({theme}) => theme.shadowOut};

    @media (min-width: 1300px) {
        width: 80%;
    }

    @media (max-width: 1250px) {
        width: 95%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 30px;
`;
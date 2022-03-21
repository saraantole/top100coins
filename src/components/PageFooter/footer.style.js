import styled from 'styled-components';

export const FooterContainer = styled.div`
    bottom: 0;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    button {
        padding: 0;

        :hover:not([disabled]) {
            cursor: pointer;
        }
    }

    span {
        font-size: ${({theme}) => theme.fontSizes.medium};
        font-weight: bold;
    }
`;

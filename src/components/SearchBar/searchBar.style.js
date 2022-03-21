import styled from 'styled-components';

export const Input = styled.input`
    width: 220px;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: ${({theme}) => theme.shadowOut};
    background: none;

    &:focus {
        outline: none; 
        box-shadow:  ${({theme}) => theme.shadowIn};
    }
`;


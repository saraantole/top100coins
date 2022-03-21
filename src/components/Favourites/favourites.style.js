import styled from 'styled-components';

export const Toggle = styled.button`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    box-shadow: ${props => !props.active ? props.theme.shadowOut : props.theme.shadowIn};

    :hover {
        cursor: pointer;
    }
`;
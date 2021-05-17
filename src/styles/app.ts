import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1180px) {
        flex-direction: row;
    }
`;
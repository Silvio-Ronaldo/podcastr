import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background: var(--header-bg);
    height: 6.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid var(--default-border);
`;

export const Left = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 1px solid var(--default-border);
    }
`;

export const Right = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
        border-style: none;
        background: transparent;
        outline-style: none;

        &:hover {
            transform: translateX(-25%);
        }
    }

    span {
        padding: 0 2rem;
        margin-left: auto;
        text-transform: capitalize;
    }
`;

export const Dark = styled.button`
    &:hover {
        color: var(--header-button-dark);
    }
`;

export const Light = styled.button`
    &:hover {
        color: var(--header-button-light);
    }
`;
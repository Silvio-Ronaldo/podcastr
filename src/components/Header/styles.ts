import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background: ${props => props.theme.colors.headerBackground};
    height: 6.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid ${props => props.theme.colors.defaultBorder};
`;

export const Left = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 1px solid ${props => props.theme.colors.defaultBorder};
    }
`;

export const FilteredLogo = styled.div`
    img {
        filter: invert(38%) sepia(65%) saturate(3856%) hue-rotate(241deg) brightness(96%) contrast(86%);
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
        color: ${props => props.theme.colors.headerButtonDark};
    }
`;

export const Light = styled.button`
    &:hover {
        color: ${props => props.theme.colors.headerButtonLight};
    }
`;
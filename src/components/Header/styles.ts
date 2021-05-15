import styled, { css } from 'styled-components';

interface ThemeProps {
    isDarked: boolean;
}

export const HeaderContainer = styled.header`
    background: ${props => props.theme.colors.headerBackground};
    height: 104px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid ${props => props.theme.colors.defaultBorder};
`;

export const Left = styled.div<{ isDarked: ThemeProps }>`
    display: flex;
    align-items: center;

    ${props => props.isDarked && css`
        img {
            filter: invert(38%) sepia(65%) saturate(3856%) hue-rotate(241deg) brightness(96%) contrast(86%);
        }
    `}

    p {
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 1px solid ${props => props.theme.colors.defaultBorder};
    
        @media (max-width: 800px) {
            display: none;
        }
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

        @media (max-width: 500px) {
            display: none;
        }
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
import styled, { css } from 'styled-components';

interface ProgressProps {
    isEmpty: boolean;
}

interface ButtonProps {
    isActive: boolean;
}

export const PlayerContainer = styled.div`
    padding: 1rem 2rem;
    width: 20.5rem;
    height: 100vh;

    background-color: ${props => props.theme.colors.playerBackground};
    color: ${props => props.theme.colors.playerColor};
    border-left: 1px solid ${props => props.theme.colors.defaultBorder};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    strong {
        font-family: Lexend, sans-serif;
        font-weight: 600;
    }

    @media (max-width: 1180px), 
    (landscape: portrait) {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 15vh;
        padding: 1rem;

        flex-direction: row;
        align-items: center;

        header {
            display: none;
        }

        footer {
            display: flex;
        }
    }
`;

export const CurrentEpisode = styled.div`
    text-align: center;

    img {
        border-radius: 1.5rem;
    }

    strong {
        display: block;
        margin-top: 2rem;
        font: 600 1rem Lexend, sans-serif;
        line-height: 1.5rem;
    }

    span {
        display: block;
        margin: 1rem 0;
        opacity: 0.6;
        line-height: 1.5rem;
        font-size: 0.875rem;
    }

    @media (max-width: 1180px), 
    (landscape: portrait) {
        display: flex;
        align-items: center;
        margin-left: 1rem;

        img {
            height: 3rem;
            width: 3rem;
        }

        strong {
            margin-top: 0;
            line-height: 1rem;
            width: 25rem;
            margin-left: 1rem;
        }

        span {
            display: none;
        }
    }

    @media (max-width: 960px) {
        strong {
            width: 30rem;
        }
    }

    @media (max-width: 650px) {
        strong {
            width: 40rem;
        }
    }
`;

export const EmptyPlayer = styled.div`
    width: 100%;
    height: 20rem;
    border: 1.5px dashed ${props => props.theme.colors.emptyPlayerBorder};
    border-radius: 1.5rem;
    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

    padding: 2rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1180px),
    (landscape: portrait) {
        border: 0;
        background: transparent;
        height: 1rem;
        padding: 1rem;
    }
`;

export const Progress = styled.div<{ isEmpty: ProgressProps }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;

    span {
        display: flex;
        width: 4rem;
        text-align: center;
        justify-content: center;
    }

    ${props => props.isEmpty && css`
        opacity: 0.5;
    `}

    @media (max-width: 1180px), 
    (landscape: portrait) {
        width: 15rem;
        margin: 0 3rem;
    }

    @media (max-width: 960px) {
        display: none;
    }
`;

export const SliderContainer = styled.div`
    flex: 1;
`;

export const EmptySlider = styled.div`
    width: 100%;
    height: 4px;
    background: ${props => props.theme.colors.sliderBackground};
    border-radius: 2px;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    @media (max-width: 1180px), 
    (landscape: portrait) {
        margin: 1rem;
        gap: 1rem;
    }
`;

export const Button = styled.button<{ isActive: ButtonProps }>`
    background: transparent;
    border: 0;
    font-size: 0;

    transition: filter 0.2s;

    @media (max-width: 650px) {
        display: none;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:hover:not(:disabled) {
        filter: brightness(0.7);
    }

    ${props => props.isActive && css`
        filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

        &:hover {
            filter: brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);  
        }
    `}
`;

export const PlayButton = styled(Button)`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${props => props.theme.colors.playButtonBackground};

    @media (max-width: 1180px), 
    (landscape: portrait) {
        display: flex;
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 650px) {
        margin: auto;
    }

    &:hover:not(:disabled) {
        filter: brightness(0.95);
    }
`;
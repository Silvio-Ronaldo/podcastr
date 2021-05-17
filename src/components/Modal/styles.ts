import styled, { css } from 'styled-components';

interface ProgressProps {
    isEmpty: boolean;
}

interface ButtonProps {
    isActive: boolean;
}

export const Progress = styled.div<{ isEmpty: ProgressProps }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    width: 30rem;

    @media (max-width: 500px) {
        width: 25rem;
        font-size: 0.7rem;
    }

    @media (max-width: 380px) {
        width: 20rem;

        span {
            margin: 0 1rem;
        }
    }

    span {
        display: flex;
        width: 4rem;
        text-align: center;
        justify-content: center;
        margin: 0 2rem;
    }

    ${props => props.isEmpty && css`
        opacity: 0.5;
    `}
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
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
    background: ${props => props.theme.colors.playButtonBackground};

    @media (max-width: 650px) {
        margin: auto;
    }

    &:hover:not(:disabled) {
        filter: brightness(0.95);
    }
`;

export const ModalContainer = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 1180px) {
        display: flex;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    background: ${props => props.theme.colors.playerBackground};
    color: ${props => props.theme.colors.playerColor};

    img {
        border-radius: 2rem;
    }

    strong {
        margin-top: 2rem;
        align-self: center;
    }

    span {
        margin-top: 1rem;
        align-self: center;
        opacity: 0.6;
    }

    footer {
        margin-top: 2rem;

        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;
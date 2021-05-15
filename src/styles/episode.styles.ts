import styled, { css } from 'styled-components';

interface ThemeProps {
    isDarked: boolean;
}

export const EpisodePage = styled.div<{ isDarked: ThemeProps }>`
    padding: 0 2rem;
    height: calc(90vh - 6.5rem);
    overflow-y: scroll;

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }

    ${props => props.isDarked && css`
        ::-webkit-scrollbar-track {
            background-color: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
            background: #333333;
        }
    `}
`;

export const OneEpisode = styled.div`
    max-width: 45rem;
    padding: 3rem 2rem;
    margin: 0 auto;

    header {
        padding-bottom: 1rem;
        border-bottom: 1px solid ${props => props.theme.colors.defaultBorder};

        h1 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }

        span {
            display: inline-block;
            font-size: 0.875rem;

            & + span {
                margin-left: 1rem;
                padding-left: 1rem;
                position: relative;

                &::before {
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-radius: 2px;
                    background: ${props => props.theme.colors.spanColor};
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
`;

export const ThumbnailContainer = styled.div`
    position: relative;

    img {
        border-radius: 1rem;
    }

    button {
        width: 3rem;
        height: 3rem;
        border-radius: 0.75rem;
        border: 0;
        position: absolute;
        z-index: 5;
        font-size: 0;

        transition: filter 0.2s;

        &:first-child {
            left: 0;
            top: 50%;
            background: ${props => props.theme.colors.episodeButtonThumbBackground};
            transform: translate(-50%, -50%);
        }

        &:last-child {
            right: 0;
            top: 50%;
            background: ${props => props.theme.colors.episodeButtonThumbBackground};
            transform: translate(50%, -50%);
        }

        &:hover {
            filter: brightness(0.9)
        }
    }
`;

export const Description = styled.div`
    margin-top: 2rem;
    line-height: 1.675rem;
    color: ${props => props.theme.colors.episodeDescriptionColor};

    p {
        margin: 1.5rem 0;
    }
`;
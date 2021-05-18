import styled, { css } from 'styled-components';

interface ThemeProps {
    isDarked: boolean;
}

export const Homepage = styled.div<{ isDarked: ThemeProps }>`
    padding: 0 2rem;
    height: calc(100vh - 6.5rem);
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

    h2 {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 1180px) {
        height: calc(93vh - 6.5rem);
    }
`;

export const LatestEpisodes = styled.section`
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

        @media (max-width: 870px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        li {
            background: ${props => props.theme.colors.listItemBackground};
            border: 1px solid ${props => props.theme.colors.defaultBorder};
            padding: 1.25rem;
            border-radius: 1.5rem;
            position: relative;

            display: flex;
            align-items: center;

            @media (max-width: 870px) {
                width: 30rem;
            }

            @media (max-width: 460px) {
                width: 25rem;
            }

            @media (max-width: 390px) {
                width: 20rem;
            }

            img {
                width: 4rem;
                height: 4rem;
                border-radius: 1rem;

                @media (max-width: 460px) {
                    width: 0;
                    height: 0;
                }
            }

            button {
                position: absolute;
                right: 2rem;
                bottom: 2rem;

                width: 2.5rem;
                height: 2.5rem;
                background: ${props => props.theme.colors.buttonBackground};
                border: 1px solid ${props => props.theme.colors.defaultBorder};
                border-radius: 0.675rem;
                font-size: 0;

                transition: filter 0.2s;

                img {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                &:hover {
                    filter: brightness(0.6);
                }
            }
        }
    }
`;

export const EpisodeDetails = styled.div`
    flex: 1;
    margin-left: 1rem;
    max-width: 20rem;

    a {
        display: block;
        color: ${props => props.theme.colors.linkColor};
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;

        @media (max-width: 870px) {
            white-space: normal;
            overflow: visible;
            text-overflow: none;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    p {
        font-size: 0.875rem;
        margin-top: 0.5rem;
        max-width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.875rem;

        &:last-child {
            margin-left: 0.5rem;
            padding-left: 0.5rem;
            position: relative;

            &::after {
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
`;

export const AllEpisodes = styled.section`
    padding-bottom: 2rem;

    table {
        width: 100%;

        th, td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid ${props => props.theme.colors.defaultBorder};
        }

        th {
            color: ${props => props.theme.colors.tableHeadColor};
            text-transform: uppercase;
            font: 500 0.75rem Lexend, sans-serif;
            text-align: left;
        }

        td {
            font-size: 0.875rem;

            img {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 0.5rem;

                @media (max-width: 620px) {
                    width: 0;
                    height: 0;
                }
            }

            a {
                color: ${props => props.theme.colors.linkColor};
                font-family: Lexend, sans-serif;
                font-weight: 600;
                text-decoration: none;
                line-height: 1.4rem;
                font-size: 1rem;

                &:hover {
                   text-decoration: underline; 
                }
            }

            button {
                width: 2rem;
                height: 2rem;
                background: ${props => props.theme.colors.buttonBackground};
                border: 1px solid ${props => props.theme.colors.defaultBorder};
                border-radius: 0.5rem;
                font-size: 0;

                transition: filter 0.2s;

                img {
                    width: 1.25rem;
                    height: 1.25rem;
                }

                &:hover {
                    filter: brightness(0.6);
                }
            }
        }

        @media (max-width: 620px) {
            thead {
                display: none;
            }

            tr {
                display: block;
                border-bottom: 
                    2px 
                    solid 
                    ${props => props.theme.colors.defaultBorder};
            }

            tr td {
                width: 100% !important;
                display: flex;
                justify-content: space-between;
                border-bottom: 
                    1px
                    dotted
                    ${props => props.theme.colors.defaultBorder};  
            }

            tr td button {
                width: 100%;
            }

            tr td:last-child {
                border-bottom: 0;
            }

            tr td::before {
                content: attr(data-label);
                float: left;
                font-weight: bold;
                font-size: 12px;
                padding: 0 2rem 1rem 0;
                margin-right: 120px;
                min-width: 70px;

                @media (max-width: 420px) {
                    margin-right: 80px;
                }

                @media (max-width: 380px) {
                    margin-right: 40px;
                }

                @media (max-width: 330px) {
                    margin-right: 10px;
                }
            }

            tr td:last-child::before {
                content: "";
                font-size: 0px;
                padding: 0;
                margin-right: 0;
                min-width: 0;
            }
        }
    }
`;
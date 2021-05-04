import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import server from '../../../server.json';
import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import { Description, EpisodePage, OneEpisode, ThumbnailContainer } from '../../styles/episode.styles';

type Episode = {
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    description: string;
    duration: number;
    durationAsString: string;
    url: string;
    publishedAt: string;
}

type EpisodeProps = {
    episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
    const { play } = usePlayer();

    return (
        <EpisodePage>
            <Head>
                <title>{episode.title} | Podcastr</title>
            </Head>

            <OneEpisode>
                <ThumbnailContainer>
                    <Link href="/">
                        <button type="button">
                            <img src="/arrow-left.svg" alt="Voltar" />
                        </button>
                    </Link>
                    <Image 
                        width={700} 
                        height={160} 
                        src={episode.thumbnail} 
                        objectFit="cover" 
                    />
                    <button type="button">
                        <img src="/play.svg" alt="Tocar episódio" onClick={() => play(episode)} />
                    </button>
                </ThumbnailContainer>

                <header>
                    <h1>{episode.title}</h1>
                    <span>{episode.members}</span>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                </header>

                <Description 
                    dangerouslySetInnerHTML={{ __html: episode.description }} 
                />
            </OneEpisode>
        </EpisodePage>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const { episodes } = server;
    const data = episodes.filter(episode => episode.id === slug)[0];

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url,
    }

    return {
        props: {
            episode,
        },
        revalidate: 60 * 60 * 24, // 24 hours
    }
}
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';

import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import 'rc-slider/assets/index.css';

import { 
    Button,
    Buttons, 
    CurrentEpisode, 
    EmptyPlayer, 
    EmptySlider, 
    PlayButton, 
    PlayerContainer, 
    Progress, 
    SliderContainer 
} from './styles';

export function Player () {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [progress, setProgress] = useState(0);

    const { 
        episodeList, 
        currentEpisodeIndex, 
        isPlaying, 
        isLooping,
        isShuffling,
        togglePlay, 
        toggleLoop,
        toggleShuffle,
        setPlayingState,
        playNext,
        playPrevious,
        clearPlayerState,
        hasPrevious,
        hasNext
    } = usePlayer();

    const episode = episodeList[currentEpisodeIndex];

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    function setupProgressListener() {
        audioRef.current.currentTime = 0;

        audioRef.current.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime));
        })
    }

    function handleSeek(amount: number) {
        audioRef.current.currentTime = amount;

        setProgress(amount);
    }

    function handleEpisodeEnded() {
        if (hasNext) {
            playNext();
        } else {
            clearPlayerState();
        }
    }

    return (
        <PlayerContainer>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            { episode ? (
                <CurrentEpisode>
                    <Image
                        width={192}
                        height={192}
                        src={episode.thumbnail}
                        objectFit="cover"
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </CurrentEpisode>
            ) : (
                <EmptyPlayer>
                    <strong>Selecione um podcast para ouvir</strong>
                </EmptyPlayer>
            ) }

            <footer>
                <Progress isEmpty={!episode}>
                    <span>{convertDurationToTimeString(progress)}</span>
                    <SliderContainer>
                        { episode ? (
                            <Slider 
                                max={episode.duration}
                                value={progress}
                                onChange={handleSeek}
                                trackStyle={{ backgroundColor: '#04d361' }}
                                railStyle={{ backgroundColor: '#9f75ff' }}
                                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
                            />
                        ) : (
                            <EmptySlider />    
                        ) }
                    </SliderContainer>
                    <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
                </Progress>

                { episode && (
                    <audio 
                        src={episode.url}
                        ref={audioRef}
                        autoPlay
                        loop={isLooping}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                        onEnded={handleEpisodeEnded}
                        onLoadedMetadata={setupProgressListener}
                    />
                )}

                <Buttons>
                    <Button
                        type="button" 
                        disabled={!episode || episodeList.length === 1}
                        onClick={toggleShuffle}
                        isActive={isShuffling}
                    >
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </Button>
                    <Button 
                        type="button" 
                        onClick={playPrevious} 
                        disabled={!episode || !hasPrevious}
                    >
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </Button>
                    <PlayButton 
                        type="button" 
                        disabled={!episode} 
                        onClick={togglePlay}
                    >
                        { isPlaying ? (
                            <img src="/pause.svg" alt="Pausar" />
                        ) : (
                            <img src="/play.svg" alt="Tocar" />
                        ) }
                    </PlayButton>
                    <Button 
                        type="button" 
                        onClick={playNext} 
                        disabled={!episode || !hasNext}
                    >
                        <img src="/play-next.svg" alt="Tocar próximo" />
                    </Button>
                    <Button
                        type="button" 
                        disabled={!episode}
                        onClick={toggleLoop}
                        isActive={isLooping}
                    >
                        <img src="/repeat.svg" alt="Repetir" />
                    </Button>
                </Buttons>
            </footer>
        </PlayerContainer>
    );
}
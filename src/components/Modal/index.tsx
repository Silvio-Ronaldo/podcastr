import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import Slider from 'rc-slider';
import { FiArrowLeft } from 'react-icons/fi';

import 'rc-slider/assets/index.css';

import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { usePlayer } from '../../contexts/PlayerContext';

import { 
    ModalContainer, 
    ModalContent, 
    Progress, 
    SliderContainer, 
    EmptySlider, 
    Buttons, 
    Button, 
    PlayButton 
} from './styles';


const customStyles = {
    content : {
      top                   : '5%',
      left                  : '5%',
      right                 : '5%',
      bottom                : '5%',
      margin                : '0',
      padding               : '0',
      display               : 'flex',
      flexDirection         : 'column',
      borderRadius          : '32px',
    }
};

export function ModalComp({ isOpen, episode, progress, handleSeek, handleModal }) {
    const { 
        episodeList, 
        currentEpisodeIndex, 
        isPlaying, 
        isLooping,
        isShuffling,
        togglePlay, 
        toggleLoop,
        toggleShuffle,
        playNext,
        playPrevious,
        hasPrevious,
        hasNext
    } = usePlayer();

    return (
        <ModalContainer>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                contentLabel="Modal"
            >
                <ModalContent>
                    <Image
                        width={192}
                        height={192}
                        src={episode.thumbnail}
                        objectFit="cover"
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>

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
                </ModalContent>

                <button onClick={handleModal} style={{ 
                        position: 'absolute',
                        bottom: '5%',
                        left: '5%',
                        border: 0,
                        backgroundColor: 'transparent',
                    }}>
                        <FiArrowLeft color="white" size={40} />
                </button>
            </Modal>
        </ModalContainer>
    );
}
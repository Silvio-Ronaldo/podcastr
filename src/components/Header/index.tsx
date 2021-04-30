import { FiSun, FiMoon } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useTheme } from '../../contexts/ThemeContext';

import { HeaderContainer, Left, Right, Dark, Light, FilteredLogo } from './styles';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    const { isDarked, toggleTheme } = useTheme();

    return (
        <HeaderContainer>
            <Left>
                {isDarked ? (
                    <FilteredLogo>
                        <img src="/logo.svg" alt="Podcastr" />
                    </FilteredLogo>
                ) : (
                    <img src="/logo.svg" alt="Podcastr" />
                ) }
        
                <p>O melhor para você ouvir, sempre</p>
            </Left>
            

            <Right>
                    { isDarked ? (
                        <Light
                            type="button" 
                            onClick={toggleTheme} 
                        >
                            <FiSun size={30} />
                        </Light>
                    ) : (
                        <Dark 
                            type="button" 
                            onClick={toggleTheme}
                        >
                            <FiMoon size={30} />
                        </Dark>
                    ) }

                <span>{currentDate}</span>
            </Right>
        </HeaderContainer>
    );
}
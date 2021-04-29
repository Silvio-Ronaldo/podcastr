import { FiSun, FiMoon } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useTheme } from '../../contexts/ThemeContext';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    const { isDarked, toggleTheme } = useTheme();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.left}>
                <img src="/logo.svg" alt="Podcastr" />
        
                <p>O melhor para você ouvir, sempre</p>
            </div>
            

            <div className={styles.right}>
                <button type="button">
                    { isDarked ? (
                        <FiMoon size={30} />
                    ) : (
                        <FiSun size={30} />
                    ) }
                </button>

                <span>{currentDate}</span>
            </div>
        </header>
    );
}
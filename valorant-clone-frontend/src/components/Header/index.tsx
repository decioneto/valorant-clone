import { SimpleButton } from '@components/Buttons/SimpleButton';
import { RiotLogo } from '@components/RiotLogo';
import { ValorantSimbol } from '@components/ValorantSimbol';
import { Globe } from 'react-feather';
import styles from './styles.module.scss';

export function Header() {
    return (
        <div className={styles.container}>
            <div className={styles['menu-left']}>
                <a href="#">
                    <RiotLogo fill="#fff" width="85" />
                </a>
                <a href="@">
                    <ValorantSimbol color="#fff" width="35" />
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Informações do jogo</a>
                        </li>
                        <li>
                            <a href="#">Mídia</a>
                        </li>
                        <li>
                            <a href="#">Notícias</a>
                        </li>
                        <li>
                            <a href="#">Placar</a>
                        </li>
                        <li>
                            <a href="#">Suporte</a>
                        </li>
                        <li>
                            <a href="#">Social</a>
                        </li>
                        <li>
                            <a href="#">Esports</a>
                        </li>
                        <li>
                            <a href="#">Comunidade</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles['menu-right']}>
                <Globe size={24} />
                <SimpleButton label="Jogue agora!" />
            </div>
        </div>
    );
}

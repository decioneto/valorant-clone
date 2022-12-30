import { MenuItem } from '@components/minor/MenuItem';
import Link from 'next/link';
import { Globe } from 'react-feather';
import { RiotLogo } from '../RiotLogo';
import { ValorantSimbol } from '../ValorantSimbol';
import styles from './styles.module.scss';

const MENU_ITEMS = [
    {
        name: 'Informações do jogo',
        isDropdown: true,
        subitems: [
            {
                name: 'Agentes',
                link: 'agents',
            },
            {
                name: 'Mapas',
                link: 'maps',
            },
            {
                name: 'Arsenal',
                link: 'arsenal',
            },
        ],
    },
    {
        name: 'Mídia',
        isDropdown: false,
        link: 'media',
    },
    {
        name: 'Notícias',
        isDropdown: false,
        link: 'news',
    },
    {
        name: 'Placar',
        isDropdown: false,
        link: 'leaderboard',
    },
    {
        name: 'Suporte',
        isDropdown: true,
        subitems: [
            {
                name: 'Requisitos',
                link: 'specs',
            },
            {
                name: 'Suporte',
                link: 'https://support-valorant.riotgames.com/hc/pt-br/',
            },
            {
                name: 'Código da comunidade',
                link: 'https://playvalorant.com/pt-br/news/announcements/codigo-da-comunidade-de-valorant/',
            },
        ],
    },
];

export function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles['menu-left']}>
                <div className="">
                    <RiotLogo color="#fff" size="75" />
                </div>
                <Link href="/">
                    <ValorantSimbol color="#fff" size="35" />
                </Link>
                <nav>
                    <ul>
                        {MENU_ITEMS.map((item) => (
                            <MenuItem
                                key={item.name}
                                name={item.name}
                                isDropDown={item.isDropdown}
                                subitems={item.subitems}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={styles['menu-right']}>
                <button>
                    <Globe size={24} />
                </button>
                <button>Jogue agora!</button>
            </div>
        </div>
    );
}

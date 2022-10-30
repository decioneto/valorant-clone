import { RiotLogo } from '@components/Global/RiotLogo';
import { ChevronDown } from '@components/Global/SVGIcon/ChevronDown';
import { ValorantSimbol } from '@components/Global/ValorantSimbol';
import { MenuItem } from '../MenuItem';
import { MenuItemProps } from '../MenuItem/types';
import styles from './styles.module.scss';

const MENU_ITEMS: MenuItemProps[] = [
    {
        label: 'Informações do jogo',
        hasDropMenu: true,
    },
    {
        label: 'Mídia',
        href: 'media',
    },
    {
        label: 'Notícias',
        href: 'news',
    },
    {
        label: 'Placar',
        href: 'leaderboards',
    },
    {
        label: 'Suporte',
        hasDropMenu: true,
    },
    {
        label: 'Social',
        hasDropMenu: true,
    },
    {
        label: 'Esports',
        href: 'https://valorantesports.com/',
    },
    {
        label: 'Comunidade',
        hasDropMenu: true,
    },
];

export function MenuLeft() {
    return (
        <div className={styles['menu-left']}>
            <span>
                <RiotLogo fill="#fff" width="85" />
                <ChevronDown />
            </span>
            <a href="@">
                <ValorantSimbol color="#fff" width="25" />
            </a>
            <nav>
                <ul>
                    {MENU_ITEMS.map((item) => (
                        <MenuItem
                            label={item.label}
                            href={item.href}
                            hasDropMenu={item.hasDropMenu}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}

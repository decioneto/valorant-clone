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
        submenus: [
            {
                label: 'Agentes',
                slug: 'agents',
                newTab: false,
            },
            {
                label: 'Mapas',
                slug: 'maps',
                newTab: false,
            },
            {
                label: 'Arsenal',
                slug: 'arsenal',
                newTab: false,
            },
        ],
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
        submenus: [
            {
                label: 'Requisitos',
                slug: 'specs',
                newTab: false,
            },
            {
                label: 'Suporte',
                slug: 'suport',
                newTab: false,
            },
            {
                label: 'Código da Comunidade',
                slug: 'news/announcements/codigo-da-comunidade-de-valorant',
                newTab: false,
            },
        ],
    },
    {
        label: 'Social',
        hasDropMenu: true,
        submenus: [
            {
                label: 'Facebook',
                slug: 'https://www.facebook.com/VALORANTbrasil/',
                newTab: true,
            },
            {
                label: 'YouTune',
                slug: 'https://www.youtube.com/channel/UCgWiuB2PQIUhJgEN9No281g',
                newTab: true,
            },
            {
                label: 'Instagram',
                slug: 'https://www.instagram.com/valorantbrasil/',
                newTab: true,
            },
            {
                label: 'Twitter',
                slug: 'https://twitter.com/valorantbrasil',
                newTab: true,
            },
        ],
    },
    {
        label: 'Esports',
        href: 'https://valorantesports.com/',
    },
    {
        label: 'Comunidade',
        hasDropMenu: true,
        submenus: [
            {
                label: 'Discord',
                slug: 'https://discord.com/invite/valorant-br',
                newTab: true,
            },
            {
                label: 'Fórum',
                slug: 'https://forums.comunidades.riotgames.com/t5/VALORANT/ct-p/VALORANT?_ga=2.150366833.694454152.1667350307-1904781289.1664718873',
                newTab: true,
            },
            {
                label: 'Grupo do Facebook',
                slug: 'https://www.facebook.com/groups/VALORANT.oficialbr/',
                newTab: true,
            },
            {
                label: 'Torneios da comunidade',
                slug: 'https://playvalorant.com/pt-br/news/tags/torneios-da-comunidade/',
                newTab: true,
            },
            {
                label: 'Programas de apoio',
                slug: 'https://www.facebook.com/groups/torneiosdecomunidade.rg',
                newTab: true,
            },
        ],
    },
];

export function MenuLeft() {
    return (
        <div className={styles['menu-left']}>
            <span className={styles['menu-logo']}>
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
                            key={item.label}
                            label={item.label}
                            href={item.href}
                            hasDropMenu={item.hasDropMenu}
                            submenus={item.submenus}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}

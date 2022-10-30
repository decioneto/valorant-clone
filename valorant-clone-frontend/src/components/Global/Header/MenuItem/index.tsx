import { ChevronDown } from '@components/Global/SVGIcon/ChevronDown';
import { MenuItemProps } from './types';
import styles from './styles.module.scss';

export function MenuItem(props: MenuItemProps) {
    if (props.hasDropMenu) {
        return (
            <div className={styles.container}>
                <li className={styles['menu-item']}>
                    <span>{props.label}</span>
                    <ChevronDown />
                </li>
                <div className={styles.dropdownMenu}>
                    <ul>
                        <li>
                            <a href="#">Agentes</a>
                        </li>
                        <li>
                            <a href="#">Mapa</a>
                        </li>
                        <li>
                            <a href="#">Arsenal</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <li className={styles['menu-item']}>
                <a href={props.href}>{props.label}</a>
            </li>
        );
    }
}

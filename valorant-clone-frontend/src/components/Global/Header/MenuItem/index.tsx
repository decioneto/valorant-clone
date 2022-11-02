import { ChevronDown } from '@components/Global/SVGIcon/ChevronDown';
import { MenuItemProps } from './types';
import styles from './styles.module.scss';
import { SubMenu } from '../SubMenu';

export function MenuItem(props: MenuItemProps) {
    if (props.hasDropMenu) {
        return (
            <div className={styles.container}>
                <li className={styles['menu-item']}>
                    <span>{props.label}</span>
                    <ChevronDown />
                </li>
                <SubMenu
                    className={styles.dropdownMenu}
                    submenusItems={props.submenus!}
                />
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

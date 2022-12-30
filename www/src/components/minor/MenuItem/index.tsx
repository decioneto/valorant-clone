import { ChevronDown } from '@components/major/ChevonDown';
import Link from 'next/link';
import { MenuItemProps } from './types';

export function MenuItem(props: MenuItemProps) {
    return (
        <li>
            <Link href={'#'}>{props.name}</Link>
            {props.isDropDown && <ChevronDown />}
        </li>
    );
}

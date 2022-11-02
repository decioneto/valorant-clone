import { SubMenuProps } from './types';

export function SubMenu(props: SubMenuProps) {
    return (
        <div className={props.className}>
            <ul>
                {props.submenusItems.map((item) => (
                    <li key={item.slug}>
                        <a
                            target={item.newTab ? '_blank' : '_self'}
                            href={item.slug}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

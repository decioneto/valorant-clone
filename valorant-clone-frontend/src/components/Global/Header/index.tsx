import { MenuLeft } from './MenuLeft';
import { MenuRight } from './MenuRight';
import styles from './styles.module.scss';

export function Header() {
    return (
        <div className={styles.container}>
            <MenuLeft />
            <MenuRight />
        </div>
    );
}

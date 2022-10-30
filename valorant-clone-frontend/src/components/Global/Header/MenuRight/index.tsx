import { SimpleButton } from '@components/Buttons/SimpleButton';
import { Globe } from 'react-feather';
import styles from './styles.module.scss';

export function MenuRight() {
    return (
        <div className={styles['menu-right']}>
            <Globe size={24} />
            <SimpleButton label="Jogue agora!" />
        </div>
    );
}

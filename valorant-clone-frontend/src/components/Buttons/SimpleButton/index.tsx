import { SimplePropsButton } from './types';
import styles from './styles.module.scss';

export function SimpleButton(props: SimplePropsButton) {
    return <button className={styles.button}>{props.label}</button>;
}

import { NewTask } from './NewTask';

import styles from './Header.module.css';
import logo from '../assets/Logo.svg';

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={logo} alt="Logotipo do aplicativo"/>
            </header>
        </div>
    );
}
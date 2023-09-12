import Logo from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <img
                className={styles.logo} 
                src={Logo} 
                alt="Logo ToDo List" 
            />
        </header>
    )
}
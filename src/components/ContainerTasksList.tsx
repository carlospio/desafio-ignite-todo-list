import {EmptyTaskList} from '../components/EmptyTaskList'
import styles from './ContainerTasksList.module.css'

export function ContainerTasksList(){
    return(
        <section className={styles.containerTasksList}>
                   <EmptyTaskList />
        </section>
    )
}
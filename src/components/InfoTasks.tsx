import styles from './InfoTasks.module.css'

export function InfoTasks(){
    return(
        <section className={styles.infoTasks}>
                <div className={styles.createdTasks}>
                    <p>
                        Tarefas criadas <span>0</span>
                    </p>
                </div>
                <div className={styles.completedTasks}>
                    <p>Concluídas <span>0</span></p>
                </div>
        </section>
    )
}
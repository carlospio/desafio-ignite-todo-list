import ClipBoardIcon from '../assets/Clipboard.png';
import styles from './EmptyTaskList.module.css' 

export function EmptyTaskList(){
    return(
        <div className={styles.emptyTaskList}>
            <img src={ClipBoardIcon} alt="Icone Clipboard" />
            <p>Você ainda não tem tarefas cadastradas  <span> Crie tarefas e organize seus itens a fazer</span></p>
           
        </div>
    )
}
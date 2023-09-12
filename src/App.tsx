import {Header} from './components/Header'
import { PlusCircle } from "@phosphor-icons/react";
import styles from './App.module.css'
import "./global.css";


function App() {
  return (
   <div>
      <Header />
     <main className={styles.container}>
      <form
          className={styles.formTask}
          action=""
        >
            <input 
              type="text" 
              placeholder="Adicione uma nova tarefa" 
            />
            <button 
              type="submit"
              className={styles.buttonSendForm}
            >
              Criar
              <PlusCircle /> 
            </button>
        </form>
     </main>
   </div>
  )
}

export default App

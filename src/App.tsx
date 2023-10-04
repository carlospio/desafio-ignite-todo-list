import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';
import { EmptyTaskList } from './components/EmptyTaskList';
import { Tasks } from './components/Tasks';

import './global.css';
import styles from './App.module.css';

export default function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: true,
    },
    {
      id: 2,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: true,
    },
    {
      id: 3,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: false,
    },
  ]); 
  const [newInputTaskContent, setNewInputTaskContent] = useState('');
  const allTasks = tasks.length;
  const tasksDone = tasks.filter(task => task.checked === true).length;


  function handleAddTask(event: FormEvent){
    event.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, content: newInputTaskContent, checked: false }]);
    setNewInputTaskContent('');
  }

  function handleInputTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Digite um conteúdo válido!');
  }

  function handleInputTaskContent(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewInputTaskContent(event.target.value);
  }

  function handleDeleteTask(id: number){
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  function handleCheckTask(id: number, checked: boolean){
    
    const updatedTaskCheck = tasks.map(task => {
      if(task.id === id){
        task.checked = checked;
      }
      return task;
    });

    setTasks(updatedTaskCheck);

  }
  

  return (
    <>
      <Header />

      <main className={styles.container}>
        <form className={styles.taskForm} onSubmit={handleAddTask}>
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={newInputTaskContent}
            onChange={handleInputTaskContent} 
            onInvalid={handleInputTaskInvalid}
            required
          />
          <button>
            Criar 
            <PlusCircle width={20} height={20} />
          </button>
        </form>

        <section className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <div className={`${styles.tasksCount} ${styles.tasksCreated}`}>
              <strong>Tarefas criadas</strong>
              <span>{allTasks}</span>
            </div>
            <div className={`${styles.tasksCount} ${styles.tasksDone}`}>
              <strong>Concluídas</strong>
              <span>{`${tasksDone} de ${allTasks}`}</span>
            </div>
          </div>
          <div className={styles.taskList}>

            {tasks.length == 0 && (
              <EmptyTaskList />
            )}
            {tasks.length > 0 &&
              tasks.map(task => (
                <Tasks 
                  id={task.id}
                  content={task.content}
                  checked={task.checked}
                  onDelete={handleDeleteTask}
                  onCheck={handleCheckTask}
                  key={task.id} 
                />
              ))
            }

          </div>
        </section>
      </main>
    </>
  )
}
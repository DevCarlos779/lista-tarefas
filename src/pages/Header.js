import { use, useState } from 'react';

import styles from './Header.module.css';
import TaskForm from '../components/form/TaskForm';

function Header() {

    const [showFormTask, setShowFormTask] = useState(false);

    function toggleForm() {
        setShowFormTask(!showFormTask);
    }

    function createTask(task) {
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowFormTask(false);
                
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.header}>

            <h1>{!showFormTask ? 'Lista de Tarefas' : 'Formulario Tarefa'}</h1>

            {showFormTask && ( 
                <TaskForm 
                    handleSubmit={createTask}
                />
            )}
            <button onClick={toggleForm}>{!showFormTask ? 'Criar Tarefa' : 'Fechar'}</button>
        </div>
        
    )
}

export default Header;
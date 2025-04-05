import { useState } from 'react';

import styles from './Header.module.css';
import TaskForm from '../components/form/TaskForm';

function Header() {

    const [showFormTask, setShowFormTask] = useState(false);

    function toggleForm() {
        setShowFormTask(!showFormTask);
    }

    return (
        <div className={styles.header}>
            {!showFormTask && (
                <h1>Lista de Tarefas</h1>
            )}

            {showFormTask && (
                <TaskForm />
            )}
            <button onClick={toggleForm}>{!showFormTask ? 'Criar Tarefa' : 'Fechar'}</button>
        </div>
        
    )
}

export default Header;
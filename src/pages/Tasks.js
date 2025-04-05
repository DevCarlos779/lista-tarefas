import { useState, useEffect } from 'react';

import styles from './Tasks.module.css';
import TaskCard from '../components/card/TaskCard';
import Container from '../components/layout/Container';

function Tasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTasks(data);
                
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <section className={styles.tasks_container}>
            <div className={styles.task_cards_container}>
                {tasks.length > 0 && (
                    tasks.map((task) => (
                        <TaskCard 
                            id={task.id}
                            name={task.name}
                            description={task.description}
                            key={task.id}
                        />
                    ))
                )}
                {tasks.length === 0 && <p>Não há tarefas</p>}
                
            </div>
        </section>
        
        
    )
}

export default Tasks;
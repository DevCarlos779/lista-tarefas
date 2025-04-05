import { useState } from 'react';

import Input from './Input';

import styles from './TaskForm.module.css';

function TaskForm({handleSubmit}) {

    const [task, setTask] = useState({})

    function handleOnChange(e) {
        
        setTask({ ...task, [e.target.name]: e.target.value })
        
    }


    function submit(e) {
        e.preventDefault();
        if(!task.name || !task.description) {
            alert("Algum dos Campos não foi preenchido")
        } else {
            handleSubmit(task)
        }
        

    }

    return (
        <form onSubmit={submit}>
            <Input
                type="text"
                text="Nome da Tarefa"
                name="name"
                placeholder="Insira o Nome da Tarefa"
                handleOnChange={handleOnChange}
            />
            <Input
                type="text"
                text="Descrição da Tarefa"
                name="description"
                placeholder="Insira uma Descrição para a Tarefa"
                handleOnChange={handleOnChange}
            />

            <button>Criar Tarefa</button>
        </form>
        
    )
}

export default TaskForm;
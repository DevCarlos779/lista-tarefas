import Input from './Input';

import styles from './TaskForm.module.css';

function TaskForm() {

    function handleOnChange(e) {
       
    }


    function submit(e) {
        e.preventDefault();
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
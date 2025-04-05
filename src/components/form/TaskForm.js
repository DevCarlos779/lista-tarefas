import styles from './TaskForm.module.css';

function TaskForm() {

    function submit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={submit}>

        </form>
        
    )
}

export default TaskForm;
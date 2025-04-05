import { Link } from 'react-router-dom';

import styles from './TaskCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function TaskCard({ id, name, description }) {
    return (
        <div className={styles.card_container}>
            <h2>TESTE</h2>

            <p><span>Descrição:</span></p>

            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.</p>

            <div className={styles.buttons}>
                <Link to={`/tasks/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}

export default TaskCard;
import { HiOutlineTrash } from 'react-icons/hi';
import { TodoType } from '../../apis/todo/todo';
import styles from './TodoList.module.css';

const TodoList = ({ id, todo, isCompleted }: TodoType) => {
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id.toString()}
        checked={isCompleted}
      />
      <label htmlFor={id.toString()} className={styles.text}>
        {todo}
      </label>
      <span className={styles.icon}>
        <button className={styles.button}>
          <HiOutlineTrash />
        </button>
      </span>
    </li>
  );
};

export default TodoList;

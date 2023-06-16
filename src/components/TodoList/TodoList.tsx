import { HiOutlineTrash } from 'react-icons/hi';
import { TodoType, deleteTodo } from '../../apis/todo/todo';
import styles from './TodoList.module.css';

interface Props {
  item: TodoType;
  list: Array<TodoType>;
  setList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
}

const TodoList = ({ item, list, setList }: Props) => {
  const { id, todo, isCompleted } = item;

  const handleDelete = () => {
    const response = deleteTodo(id);
    response.then((res) => {
      if (res?.status === 204) {
        console.log('삭제 성공!');
        setList(list.filter((item) => item.id !== id));
      } else {
        console.log('삭제 실패');
      }
    });
  };

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
        <button className={styles.button} onClick={handleDelete}>
          <HiOutlineTrash />
        </button>
      </span>
    </li>
  );
};

export default TodoList;

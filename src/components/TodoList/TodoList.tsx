import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { TodoType, deleteTodo, updateTodo } from '../../apis/todo/todo';
import styles from './TodoList.module.css';

interface Props {
  item: TodoType;
  setList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
}

const TodoList = ({ item, setList }: Props) => {
  const { id, todo, isCompleted } = item;
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo);

  const handleUpdate = (newTodo: TodoType) => {
    const response = updateTodo({
      id,
      todo: newTodo.todo,
      isCompleted: newTodo.isCompleted,
    });
    response.then((res) => {
      if (!res) {
        console.log('투두 수정 실패');
      } else {
        setList((prevList) =>
          prevList.map((value) => (value.id === newTodo.id ? newTodo : value))
        );
      }
    });
  };

  const todoUpdate = () => {
    if (text.trim().length === 0 || todo === text) {
      setText(todo);
    } else {
      handleUpdate({ ...item, todo: text });
    }
    setIsEdit((prev) => !prev);
  };

  const handleDelete = () => {
    const response = deleteTodo(id);
    response.then((res) => {
      if (res?.status === 204) {
        console.log('삭제 성공!');
        setList((prevList) => prevList.filter((item) => item.id !== id));
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
        onChange={(e) =>
          handleUpdate({ ...item, isCompleted: e.target.checked })
        }
      />
      {isEdit ? (
        <input
          type='text'
          data-testid='modify-input'
          className={`${styles.input} ${styles.text}`}
          defaultValue={todo}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className={styles.text}>{todo}</span>
      )}

      <span className={styles.icon}>
        {isEdit ? (
          <button
            data-testid='submit-button'
            className={styles.button}
            onClick={todoUpdate}
          >
            <AiOutlineCheck />
          </button>
        ) : (
          <button
            data-testid='modify-button'
            className={styles.button}
            onClick={() => setIsEdit((prev) => !prev)}
          >
            <BiEditAlt />
          </button>
        )}
      </span>
      <span className={styles.icon}>
        {isEdit ? (
          <button
            data-testid='cancel-button'
            className={styles.button}
            onClick={() => setIsEdit((prev) => !prev)}
          >
            <MdOutlineCancel />
          </button>
        ) : (
          <button
            data-testid='delete-button'
            className={styles.button}
            onClick={handleDelete}
          >
            <HiOutlineTrash />
          </button>
        )}
      </span>
    </li>
  );
};

export default TodoList;

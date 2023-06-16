import { useState } from 'react';
import styles from './TodoAdd.module.css';
import { TodoType, createTodo } from '../../apis/todo/todo';

interface Props {
  list: Array<TodoType>;
  setList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
}

const TodoAdd = ({ list, setList }: Props) => {
  const [text, setText] = useState('');

  const handlerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('');
      return;
    }
    const response = createTodo(text);
    response.then((res) => {
      if (!res) {
        console.log('투두 등록 실패');
      } else {
        setList([...list, res]);
      }
    });
    setText('');
  };

  return (
    <form className={styles.form}>
      <input
        type='text'
        data-testid='new-todo-input'
        placeholder='Add Todo'
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        data-testid='new-todo-add-button'
        className={styles.button}
        onClick={handlerSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default TodoAdd;

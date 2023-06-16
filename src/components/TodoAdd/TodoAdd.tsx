import { useState } from 'react';
import styles from './TodoAdd.module.css';

const TodoAdd = () => {
  const [text, setText] = useState('');

  const handlerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('');
      return;
    }

    setText('');
  };

  return (
    <form className={styles.form}>
      <input
        type='text'
        placeholder='Add Todo'
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.button} onClick={handlerSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoAdd;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/container.scss';
import TodoList from '../../components/TodoList/TodoList';
import TodoAdd from '../../components/TodoAdd/TodoAdd';
import { TodoType, getTodos } from '../../apis/todo/todo';

const Todo = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<TodoType[]>([]);

  useEffect(() => {
    if (!window.localStorage.getItem('accessToken')) {
      navigate('/signin');
    }

    const response = getTodos();
    response.then((res) => {
      if (!res) {
        console.log('투두 조회 실패');
      } else {
        setList(res);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container' style={{ alignItems: 'inherit' }}>
      <ul className='list'>
        {list.map((item: TodoType) => (
          <TodoList
            key={item.id}
            id={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
          />
        ))}
      </ul>
      <TodoAdd list={list} setList={setList} />
    </div>
  );
};

export default Todo;

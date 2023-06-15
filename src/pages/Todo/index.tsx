import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem('accessToken')) {
      navigate('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>투두</div>;
};

export default Todo;

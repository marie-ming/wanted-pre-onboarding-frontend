import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const jwt = window.localStorage.getItem('accessToken');

  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate('/signin');
  };

  return (
    <header
      className={jwt ? `${styles.header} ${styles.todo}` : `${styles.header}`}
    >
      <span
        className={
          jwt ? `${styles.title} ${styles.todoTitle}` : `${styles.title}`
        }
      >
        ToDo
      </span>
      {jwt && (
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;

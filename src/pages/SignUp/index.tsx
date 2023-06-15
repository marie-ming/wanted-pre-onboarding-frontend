import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, isValidPassword } from '../../utils/utility';
import '../../scss/sign.scss';
import { AuthSignUp } from '../../apis/auth/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      navigate('/todo');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const response = AuthSignUp({ email, password });
    response.then((res) => {
      if (res?.status === 201) {
        alert('회원가입 성공!');
        navigate(`/signin`);
      } else {
        console.log('가입실패');
      }
    });
  };

  useEffect(() => {
    setIsValid(isValidEmail(email) && isValidPassword(password));
  }, [email, password]);

  return (
    <section className='container'>
      <input
        type='email'
        className='container_child'
        data-testid='email-input'
        placeholder='이메일'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        className='container_child'
        data-testid='password-input'
        placeholder='비밀번호'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
        onKeyUp={onKeyPress}
      />
      <button
        className='container_child'
        data-testid='signup-button'
        disabled={!isValid}
        onClick={handleSubmit}
      >
        회원가입
      </button>
    </section>
  );
};

export default SignUp;

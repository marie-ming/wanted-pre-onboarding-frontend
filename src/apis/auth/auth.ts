import request from '../core';

interface TokenType {
  access_token: string;
}

interface SignType {
  email: string;
  password: string;
}

export const AuthSignIn = async ({ email, password }: SignType) => {
  try {
    const response: TokenType = await request({
      data: {
        email,
        password,
      },
      method: 'POST',
      url: '/auth/signin',
    });
    window.localStorage.setItem('accessToken', response.access_token);
    return response;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const AuthSignUp = async ({ email, password }: SignType) => {
  try {
    const response = await request({
      data: {
        email,
        password,
      },
      method: 'POST',
      url: '/auth/signup',
    });
    return response;
  } catch (error: any) {
    alert(error.response.data.message);
    console.log(error);
    return;
  }
};

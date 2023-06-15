import request from '../core';

interface SignType {
  email: string;
  password: string;
}

export const AuthSignIn = async ({ email, password }: SignType) => {
  try {
    const response = await request({
      data: {
        email,
        password,
      },
      method: 'POST',
      url: '/auth/signin',
    });
    window.localStorage.setItem('accessToken', response.data.access_token);
    return response;
  } catch (error: any) {
    alert(error.response.data.message);
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

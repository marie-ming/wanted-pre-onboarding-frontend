import request from '../core';

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

export const getTodos = async () => {
  try {
    const response = await request({
      method: 'GET',
      url: '/todos',
    });
    return response;
  } catch (error: any) {
    console.log(error);
    return;
  }
};

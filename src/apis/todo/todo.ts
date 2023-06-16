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
    return response.data;
  } catch (error: any) {
    console.log(error);
    return;
  }
};

export const createTodo = async (todo: string) => {
  try {
    const response = await request({
      data: { todo },
      method: 'POST',
      url: '/todos',
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    return;
  }
};

export const updateTodo = async ({ id, todo, isCompleted }: TodoType) => {
  try {
    const response = await request({
      data: { todo, isCompleted },
      method: 'PUT',
      url: `/todos/${id}`,
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
    return;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await request({
      method: 'DELETE',
      url: `/todos/${id}`,
    });
    return response;
  } catch (error: any) {
    console.log(error);
    return;
  }
};

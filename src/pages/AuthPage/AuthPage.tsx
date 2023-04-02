import React from 'react';
import './AuthPage.module.scss';
import { useForm } from 'react-hook-form';

interface FormValues {
  vim: string;
}

export const AuthPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col align-center justify-center p-10">
      <h1>Добро пожаловать!</h1>
      <input
        className=" outline-none px-3 py-1 text-gray-800 mr-2 border-2"
        {...register('vim', { maxLength: 17, minLength: 17 })}
      />
      <h3>Введите VIN Вашего авто для авторизации</h3>
      <button className=" px-3 py-1 bg-green-500 border-2" disabled={!isValid}>
        Войти
      </button>
    </form>
  );
};

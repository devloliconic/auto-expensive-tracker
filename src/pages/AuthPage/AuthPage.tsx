import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './AuthPage.module.scss';

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
    <div className={styles.pageContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.welcomeTitle}>Добро пожаловать!</h1>
        <input {...register('vim', { maxLength: 17, minLength: 17 })} />
        <h3>Введите VIN Вашего авто для авторизации</h3>
        <button className=" px-3 py-1 bg-green-500 border-2" disabled={!isValid}>
          Войти
        </button>
      </form>
    </div>
  );
};

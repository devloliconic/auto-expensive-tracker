import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button';

import styles from './AuthPage.module.scss';

interface FormValues {
  vim: string;
}

const AuthPage: React.FC = () => {
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
        <input {...register('vim', { maxLength: 17, minLength: 17 })} placeholder="VIN Вашего авто" />
        <label>Введите VIN Вашего авто для авторизации</label>
        <Button variant="box" type="button" size={'small'}>
          Отслеживать
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;

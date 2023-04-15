import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAddUserEntries } from '@/api/useAddUserEntries';
import { Button } from '@/components/Button';

import styles from './AuthPage.module.scss';

interface FormValues {
  vin: string;
}

const AuthPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const { addUser } = useAddUserEntries();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    addUser(data.vin, { vin: data.vin }).then(() => {
      localStorage.setItem('USER_VIN', data.vin);
      navigate('/');
    });
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.welcomeTitle}>Добро пожаловать!</h1>
        <input {...register('vin', { maxLength: 17, minLength: 17 })} placeholder="VIN Вашего авто" />
        <label>Введите VIN Вашего авто для авторизации</label>
        {!isValid && <p>Неверный VIN: количество символов должно быть 17</p>}
        <Button variant="rounded" type="submit" size="small" disabled={!isValid}>
          Отслеживать
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;

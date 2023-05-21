import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAddUserEntries } from '@/api/mutations/useAddUserEntries';
import { useGetUserByVin } from '@/api/queries/useGetUserByVin';
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
  const { getUserByVin } = useGetUserByVin();
  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    try {
      const fireBaseUser = await getUserByVin(data.vin);
      if (fireBaseUser.data()) {
        localStorage.setItem('USER_VIN', data.vin);
        navigate('/');
        return;
      } else {
        addUser(data.vin, { vin: data.vin }).then(() => {
          localStorage.setItem('USER_VIN', data.vin);
          navigate('/');
        });
      }
    } catch (e) {
      console.log(e);
    }
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

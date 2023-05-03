import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/Input';
import Layout from '@/components/Layout';

import styles from './ProfileEditPage.module.scss';

interface FormValues {
  lastName: string;
  firstName: string;
  age: string;
  carName: string;
}

const ProfileEditPage = () => {
  const { handleSubmit, register } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <h2>Редактирование профиля</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeHolder="Имя" label="Введите свое имя:" {...register('firstName')} />
          <Input placeHolder="Фамилия" label="Введите свою Фамилию:" />
          <Input placeHolder="Возраст" label="Введите свой возраст:" type="number" />
        </form>
      </div>
    </Layout>
  );
};

export default ProfileEditPage;

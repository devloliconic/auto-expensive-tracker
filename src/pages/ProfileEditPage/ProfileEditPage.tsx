import { DocumentData } from 'firebase/firestore';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { DataEditFields } from '@/_types/user';
import { useEditProfileData } from '@/api/mutations/useEditProfileData';
import { useGetUserByVin } from '@/api/queries/useGetUserByVin';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Layout from '@/components/Layout';

import styles from './ProfileEditPage.module.scss';

const ProfileEditPage = () => {
  const [userData, setUserData] = useState<DocumentData | undefined>(undefined);
  const navigate = useNavigate();

  const defaultValues = useMemo(
    () => ({
      firstName: userData?.firstName ? userData?.firstName : '',
      lastName: userData?.lastName ? userData?.lastName : '',
      nameAuto: userData?.nameAuto ? userData?.nameAuto : '',
      range: userData?.range ? userData?.range : '',
      userYears: userData?.userYears ? userData?.userYears : '',
      vin: userData?.vin ? userData?.vin : '',
      years: userData?.years ? userData?.years : '',
    }),
    [
      userData?.firstName,
      userData?.lastName,
      userData?.nameAuto,
      userData?.range,
      userData?.userYears,
      userData?.vin,
      userData?.years,
    ],
  );

  const { handleSubmit, control, reset } = useForm<DataEditFields>({ mode: 'onChange', defaultValues });

  const { getUserByVin } = useGetUserByVin();
  const { updateUserProfile } = useEditProfileData();

  const userVin = localStorage.getItem('USER_VIN') || '';
  const onSubmit = (data: DataEditFields) => {
    updateUserProfile({ ...data, vin: userVin }).then(() => navigate('/profile'));
  };

  useEffect(() => {
    if (!userData) {
      getUserByVin(userVin || '').then((data) => {
        setUserData(data?.docs[0]?.data());
      });
    }
  }, [getUserByVin, userData, userVin]);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  if (!userData) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <h2>Редактирование профиля</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formSection}>
            <h3>Пользователь</h3>
            <Controller
              render={({ field }) => <Input label="Введите свое имя:" placeHolder="Имя" {...field} />}
              control={control}
              name="firstName"
            />
            <Controller
              render={({ field }) => <Input label="Введите свою Фамилию:" placeHolder="Фамилия" {...field} />}
              control={control}
              name="lastName"
            />
            <Controller
              render={({ field }) => (
                <Input label="Введите свой возраст:" placeHolder="Возраст" type="number" {...field} />
              )}
              control={control}
              name="userYears"
            />
          </div>
          <div className={styles.formSection}>
            <h3>Автомобиль</h3>
            <Controller
              render={({ field }) => (
                <Input label="Введите год автомобиля:" placeHolder="Возраст" type="number" {...field} />
              )}
              control={control}
              name="years"
            />
            <Controller
              render={({ field }) => <Input label="Введите пробег:" placeHolder="Пробег" type="number" {...field} />}
              control={control}
              name="range"
            />
            <Controller
              render={({ field }) => <Input label="Введите название автомобиля:" placeHolder="Название" {...field} />}
              control={control}
              name="nameAuto"
            />
          </div>
          <Button variant="rounded" size="medium" type="submit">
            Сохранить
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default ProfileEditPage;

import { DocumentData } from 'firebase/firestore';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUserByVin } from '@/api/queries/useGetUserByVin';
import { Button } from '@/components/Button';
import Layout from '@/components/Layout';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { getUserByVin } = useGetUserByVin();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<DocumentData | undefined>(undefined);
  console.log(userData);
  const userName = useMemo(
    () => [userData?.lastName, userData?.firstName, userData?.userYears].filter(Boolean).join(' '),
    [userData?.firstName, userData?.lastName, userData?.userYears],
  );

  const userVin = localStorage.getItem('USER_VIN');
  useEffect(() => {
    if (!userData) {
      getUserByVin(userVin || '').then((data) => {
        setUserData(data?.docs[0]?.data());
      });
    }
  }, [getUserByVin, userData, userVin]);

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <h2>Профиль</h2>
        <div className={styles.userInfoContainer}>
          {userName && <p>{userName}</p>}
          <Button variant="box" size="small" onClick={() => navigate('/profile/edit')}>
            Редактировать профиль
          </Button>
        </div>
        {userData?.nameAuto ? (
          <div className={styles.carInfoContainer}>
            <div>
              <img
                src="http://st.gde-fon.com/wallpapers_original/83603_aston-martin_gauntlet_1920x1200_www.Gde-Fon.com.jpg"
                alt="car"
              />
              <p>userData?.nameAuto</p>
            </div>
            <div>
              {userData?.carRange && <p>Пробег: {userData?.carRange} км</p>}
              {userData?.years && <p>Год: {userData?.years}</p>}
              {userData?.vin && <p>VIN: {userData?.vin}</p>}
            </div>
          </div>
        ) : (
          <div className={styles.autoFallback}>Нету данных о автомобиле</div>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePage;

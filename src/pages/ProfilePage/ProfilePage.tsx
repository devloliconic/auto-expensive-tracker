import React from 'react';

import { Button } from '@/components/Button';
import Layout from '@/components/Layout';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <h2>Профиль</h2>
        <div className={styles.userInfoContainer}>
          <p>Виктор, 31 год</p>
          <p>Я владею 1 автомобилем!</p>
          <Button variant="rounded" size="small">
            Редактировать профиль
          </Button>
        </div>
        <div className={styles.carInfoContainer}>
          <div>
            <img
              src="http://st.gde-fon.com/wallpapers_original/83603_aston-martin_gauntlet_1920x1200_www.Gde-Fon.com.jpg"
              alt="car"
            />
            <p>lada vesta</p>
          </div>
          <div>
            <p>Пробег: 402394 км</p>
            <p>Год: 2017</p>
            <p>VIN: XTAGFLHY0482343</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;

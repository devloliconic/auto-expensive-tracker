import React from 'react';
// import ReactDOM from 'react-dom/client';

import { useProtectedRoute } from '@/utils/hooks/useProtectedRoute';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  useProtectedRoute();
  return (
    <div className="">
      <h5 className={styles.profileTitle}>Профиль</h5>
      <label className={styles.profile}>name and age</label>
      <label className={styles.profile}>Я владею 1 автомобилем!</label>
      <button className={styles.profile}>Редактировать профиль</button>
      <label className={styles.profile}>Мой автомобил:</label>
    </div>
  );
  //   function ProfileCARD() {
  //     return <h1>{this.props.stamp}</h1>;
  //   }
  //
  //   const root = ReactDOM.createRoot(document.getElementById('root'));
  //   const car = (stamp = 'Lada Vesta');
  //   root.render(car);
};

export default ProfilePage;

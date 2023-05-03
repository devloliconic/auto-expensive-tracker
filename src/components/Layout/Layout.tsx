import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackButton } from '@/icons/backButton.svg';
import { ReactComponent as Logo } from '@/icons/logo.svg';
import { ReactComponent as Profile } from '@/icons/profile.svg';

import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logoContainer}>
            <Logo />
            <p>AutoExpensiveTrack</p>
          </div>
        </Link>
        <Link to="/profile">
          <Profile />
        </Link>
      </header>
      <div>{children}</div>
    </>
  );
};
export default Layout;

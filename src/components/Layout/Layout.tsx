import React from 'react';

import { ReactComponent as Avatar } from '@/icons/avatar.svg';
import { ReactComponent as BackButton } from '@/icons/backButton.svg';
import { ReactComponent as Logo } from '@/icons/logo.svg';

import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <header className={styles.header}>
        <BackButton />
        <div className={styles.logoContainer}>
          <Logo />
          <p>AutoExpensiveTrack</p>
        </div>
        <Avatar />
      </header>
      <div>{children}</div>
    </>
  );
};
export default Layout;

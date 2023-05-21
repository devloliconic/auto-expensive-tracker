import React from 'react';

import styles from './CategoryCost.module.scss';

interface Props {
  summaryCost: string | number;
  expType: string;
  description: string;
}

const nameByExpType = {
  changeDetails: 'Замена деталей',
  consumables: 'Расходники',
  fuel: 'Бензин',
  other: 'Прочее',
  service: 'Техническое обслуживание',
};

export const CategoryCost = ({ summaryCost, expType, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.divider} ${styles[expType]}`} />
      <div className={styles.content}>
        <h3 className={styles.coastTitle}>{`${
          nameByExpType[expType as keyof typeof nameByExpType]
        } (${summaryCost})`}</h3>
        <p>Последняя запись: {description}</p>
      </div>
    </div>
  );
};

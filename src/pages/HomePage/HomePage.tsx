import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import { DocumentData } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

import { useGetUserByVin } from '@/api/queries/useGetUserByVin';
import { useGetUserCollectionByVin } from '@/api/queries/useGetUserCollectionByVin';
import { Button } from '@/components/Button';
import { CategoryCost } from '@/components/CategoryCost';
import Layout from '@/components/Layout';
import { useProtectedRoute } from '@/utils/hooks/useProtectedRoute';

import styles from './HomePage.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  useProtectedRoute();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<DocumentData | undefined>(undefined);
  const [userCollections, setUserCollection] = useState<DocumentData[] | undefined>();
  const userVin = localStorage.getItem('USER_VIN') || '';

  const { getUserByVin } = useGetUserByVin();
  const { getUserCollectionByVin } = useGetUserCollectionByVin();

  useEffect(() => {
    if (!userData) {
      getUserByVin(userVin || '').then((data) => {
        setUserData(data?.data());
      });
    }
  }, [getUserByVin, userData, userVin]);

  useEffect(() => {
    if (!userCollections) {
      getUserCollectionByVin(userVin || '').then((data) => {
        const result: DocumentData[] = [];
        data.forEach((it) => it.forEach((_it) => result.push(_it.data())));

        setUserCollection(result);
      });
    }
  }, [getUserCollectionByVin, userCollections, userVin]);

  const convertedDataList = userCollections?.reduce((acc, it) => {
    const id = it.expType as string;
    if (acc[id]) {
      return { ...acc, [id]: [...acc[id], it] };
    }
    return { ...acc, [id]: [it] };
  }, {});

  const summaryPriceCoastList = convertedDataList
    ? Object.entries(convertedDataList).map(([_, it]) => {
        return it.reduce((acc: number, it: { price: number }) => it.price + acc, 0);
      })
    : null;

  console.log(convertedDataList);

  const doughnutDataList = {
    datasets: [
      {
        data: summaryPriceCoastList,
        backgroundColor: ['#1ACE0A', '#22F1F1', '#584BEC', '#F1229E', '#FDE720'],
        borderColor: ['#1ACE0A', '#22F1F1', '#584BEC', '#F1229E', '#FDE720'],
        borderWidth: 1,
      },
    ],
  };

  const summaryPrice = summaryPriceCoastList?.reduce((acc, it) => acc + it, 0);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {convertedDataList ? (
          <>
            <div className={styles.diogram}>
              <Doughnut data={doughnutDataList} />
              <p>{summaryPrice}</p>
            </div>
            <p className={styles.category}>Категории:</p>
            <div className={styles.coastList}>
              {convertedDataList &&
                Object.entries(convertedDataList)?.map(([key, it], index) => (
                  <CategoryCost
                    expType={key}
                    key={index}
                    summaryCost={it.reduce((acc: number, it: { price: number }) => acc + it.price, 0)}
                    description={it.at(-1).description}
                  />
                ))}
            </div>
            <Button variant="rounded" size="large" type="button" onClick={() => navigate('/')}>
              Создание затрат
            </Button>
          </>
        ) : (
          <p className={styles.category}>Затраты отсутсвуют</p>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
